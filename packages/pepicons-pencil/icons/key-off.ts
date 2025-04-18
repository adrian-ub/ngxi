import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilKeyOffIcon],svg[pepicons-pencil-key-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12.5 11.611V9q0-.126-.012-.25a4.5 4.5 0 1 0-4.975 0A3 3 0 0 0 7.5 9v8a2.5 2.5 0 0 0 5 0a.5.5 0 0 0-.182-.386l-.786-.646l.716-.41a.5.5 0 0 0 .252-.434v-.775a.5.5 0 0 0-.146-.353l-.998-1.001l1.003-1.036a.5.5 0 0 0 .141-.348m-1.047-2.986q.047.182.047.375v2.409l-1.204 1.243a.5.5 0 0 0 .005.701l1.199 1.203v.278l-1.093.626a.5.5 0 0 0-.07.82l1.147.943A1.5 1.5 0 0 1 8.5 17V9q0-.193.047-.375a.5.5 0 0 0-.242-.562a3.5 3.5 0 1 1 3.39 0a.5.5 0 0 0-.242.562" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10 5.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-2a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilKeyOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
