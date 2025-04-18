import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixKeyboardFloatingIcon],svg[ix-keyboard-floating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.333 85.336v341.333H42.667V85.336zm-42.666 42.667H85.333v256h341.334zM384 170.669v170.667H128V170.669zm-21.333 21.334H149.333v128h213.334zm-176 85.333v21.333h-16v-21.333zm154.666 0v21.333h-16v-21.333zm-42.666 0v21.333h-85.334v-21.333zm-112-64v21.333h-16v-21.333zm42.666 0v21.333h-16v-21.333zm42.667 0v21.333h-16v-21.333zm69.333 0v21.333h-42.666v-21.333z"></svg:path>`,
})
export class IxKeyboardFloatingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
