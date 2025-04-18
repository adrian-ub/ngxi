import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiStorageIcon],svg[oui-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(0 2)"><svg:path fill-rule="nonzero" d="M2 6a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1zm13 2v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m1-3V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v3c0 .601.271 1.133.69 1.5C.271 6.867 0 7.399 0 8v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8c0-.601-.271-1.133-.689-1.5c.418-.367.689-.899.689-1.5"></svg:path><svg:circle cx="4.5" cy="9.5" r="1.5"></svg:circle><svg:circle cx="4.5" cy="3.5" r="1.5"></svg:circle><svg:path d="M12 8h1v3h-1zm-2 0h1v3h-1zm2-6h1v3h-1zm-2 0h1v3h-1z"></svg:path></svg:g>`,
})
export class OuiStorageIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
