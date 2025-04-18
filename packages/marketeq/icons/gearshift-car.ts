import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqGearshiftCarIcon],svg[marketeq-gearshift-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M16.667 31.25v-12.5M33.333 25H16.667zM25 31.25v-12.5zm8.333 0v-12.5z"></svg:path><svg:path stroke="#306CFE" d="M10.417 43.75h29.166c1.15 0 2.084-.933 2.084-2.083V8.333c0-1.15-.933-2.083-2.084-2.083H10.417a2.084 2.084 0 0 0-2.084 2.083v33.334c0 1.15.933 2.083 2.084 2.083"></svg:path></svg:g>`,
})
export class MarketeqGearshiftCarIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
