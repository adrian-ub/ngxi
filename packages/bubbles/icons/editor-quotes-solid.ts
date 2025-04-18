import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEditorQuotesSolidIcon],svg[bubbles-editor-quotes-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.44 2c-1.294 0-2.558.444-3.51 1.27C.975 4.099.405 5.257.405 6.5s.57 2.401 1.527 3.23C2.883 10.556 4.147 11 5.44 11c.946 0 1.876-.237 2.68-.687a8.36 8.36 0 0 1-1.861 3.318C4.848 15.159 2.955 16 1 16a1 1 0 1 0 0 2c2.54 0 4.958-1.095 6.728-3.013c1.614-1.75 2.572-4.056 2.726-6.483c.253.456.592.871 1.001 1.226c.952.826 2.216 1.27 3.51 1.27c.944 0 1.874-.237 2.678-.687a8.36 8.36 0 0 1-1.86 3.318C14.373 15.159 12.48 16 10.525 16a1 1 0 1 0 0 2c2.54 0 4.958-1.095 6.728-3.013C19.02 13.072 20 10.49 20 7.813V6.5c0-1.243-.57-2.401-1.527-3.23C17.521 2.444 16.257 2 14.964 2s-2.557.444-3.509 1.27a4.5 4.5 0 0 0-1.253 1.765A4.5 4.5 0 0 0 8.948 3.27C7.997 2.444 6.733 2 5.44 2" clip-rule="evenodd"></svg:path>`,
})
export class BubblesEditorQuotesSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
