import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsKeyboardIcon],svg[ls-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 101h708c16 0 30 14 30 30v432c0 16-14 30-30 30H30c-16 0-30-14-30-30V131c0-16 14-30 30-30m21 440h666V152H51zm72-348h61v62h-61zm116 0h61v62h-61zm114 0h62v62h-62zm116 0h60v62h-60zm115 0h61v62h-61zM181 316h62v62h-62zm116 62v-62h61v62zm115 0v-62h61v62zm177 0h-62v-62h62zm-60 122H239v-61h290z"></svg:path>`,
})
export class LsKeyboardIcon {
  readonly viewBox = input("0 0 768 614")
  readonly width = input("1.26em")
  readonly height = input("1em")
}
