import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEditorSubscriptSolidIcon],svg[bubbles-editor-subscript-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.295 4.29a1 1 0 0 1 1.414.005l4.61 4.64l4.608-4.64a1 1 0 1 1 1.419 1.41l-4.618 4.648L12.346 15a1 1 0 0 1-1.419 1.41l-4.609-4.64l-4.609 4.64A1 1 0 0 1 .291 15l4.618-4.648L.29 5.705A1 1 0 0 1 .295 4.29m17.08 9.175a1.6 1.6 0 0 0-.573-.045c-.195.02-.37.074-.513.148a.8.8 0 0 0-.287.235a.3.3 0 0 0-.069.17a1 1 0 1 1-1.997-.114c.026-.45.187-.87.444-1.227c.256-.354.597-.634.98-.835a3.4 3.4 0 0 1 1.24-.367c.433-.044.875-.01 1.294.103a3.2 3.2 0 0 1 1.154.573c.339.27.617.617.784 1.028c.169.414.213.864.121 1.305c-.09.436-.306.825-.6 1.142L17.162 18h1.819a1 1 0 1 1 0 2h-4.073a1 1 0 0 1-.741-1.671l3.706-4.095l.01-.01a.4.4 0 0 0 .111-.193a.24.24 0 0 0-.015-.142a.56.56 0 0 0-.178-.218a1.2 1.2 0 0 0-.427-.207" clip-rule="evenodd"></svg:path>`,
})
export class BubblesEditorSubscriptSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
