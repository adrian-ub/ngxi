import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsSovietUnionIcon],svg[circle-flags-soviet-union-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSovietUnion0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSovietUnion0)"><svg:path fill="#d80027" d="M0 0h512v512H0z"></svg:path><svg:path fill="#ffda44" d="m90 243l25 25l21-21l115 115l18-18l-115-115l29-29l-44-6z"></svg:path><svg:path fill="#ffda44" d="M173 166a93 93 0 0 1 44 40c22 38 16 83-14 100c-22 13-52 7-75-15l-58 53l18 18l42-46c27 24 63 30 90 14c36-21 45-73 20-116a95 95 0 0 0-67-48m-43-6l105-77H105l105 77l-40-124z"></svg:path><svg:path fill="#d80027" d="m153 129l45-34h-56l45 34l-17-54z"></svg:path></svg:g>`,
})
export class CircleFlagsSovietUnionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
