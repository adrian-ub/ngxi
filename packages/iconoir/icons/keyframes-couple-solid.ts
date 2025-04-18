import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframesCoupleSolidIcon],svg[iconoir-keyframes-couple-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke-width="1.5"><svg:path fill-rule="evenodd" d="M14.066 5.18L12.56 6.874l-1.121-.997l1.505-1.693a2.75 2.75 0 0 1 4.11 0l5.324 5.99a2.75 2.75 0 0 1 0 3.653m0 0l-5.324 5.99a2.75 2.75 0 0 1-4.11 0l-1.505-1.693l1.12-.997l1.506 1.693a1.25 1.25 0 0 0 1.868 0l5.324-5.99a1.25 1.25 0 0 0 0-1.66l-5.324-5.99a1.25 1.25 0 0 0-1.868 0" clip-rule="evenodd"></svg:path><svg:path d="M6.945 4.184a2.75 2.75 0 0 1 4.11 0l5.325 5.99a2.75 2.75 0 0 1 0 3.653l-5.324 5.99a2.75 2.75 0 0 1-4.111 0l-5.324-5.99a2.75 2.75 0 0 1 0-3.654z"></svg:path></svg:g>`,
})
export class IconoirKeyframesCoupleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
