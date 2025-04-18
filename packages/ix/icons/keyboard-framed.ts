import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixKeyboardFramedIcon],svg[ix-keyboard-framed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 277.333v149.334H42.667V277.333zm-21.333 21.334H64v106.666h234.667zm-192 64V384H85.333v-21.333zm128 0V384H128v-21.333zm42.666 0V384H256v-21.333zM106.667 320v21.333H85.333V320zm42.666 0v21.333H128V320zM192 320v21.333h-21.333V320zm42.667 0v21.333h-21.334V320zm42.666 0v21.333H256V320zm192-234.667V320h-128v-42.667h85.334V128H85.333v128H42.667V85.333zm-320 128V256h-42.666v-42.667zm192 0V256H170.667v-42.667zm64 0V256h-42.666v-42.667zm-256-64V192h-42.666v-42.667zm64 0V192h-42.666v-42.667zm64 0V192h-42.666v-42.667zm64 0V192h-42.666v-42.667zm64 0V192h-42.666v-42.667z"></svg:path>`,
})
export class IxKeyboardFramedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
