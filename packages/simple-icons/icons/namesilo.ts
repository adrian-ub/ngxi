import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsNamesiloIcon],svg[simple-icons-namesilo-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.65 0A4.65 4.65 0 0 0 0 4.65v14.7A4.65 4.65 0 0 0 4.65 24h14.7A4.65 4.65 0 0 0 24 19.35V4.65A4.65 4.65 0 0 0 19.35 0Zm7.21 4.2l4.64 3.048V8.86h-.006c-.124.4-2.156.718-4.644.718S7.33 9.26 7.206 8.86H7.2V7.248ZM7.2 9.384c0 .5 2.082.906 4.65.906s4.65-.406 4.65-.906v2.587c0 .5-2.082.905-4.65.905s-4.65-.405-4.65-.905zm0 3.3c0 .5 2.082.906 4.65.906s4.65-.405 4.65-.905v2.586c0 .5-2.082.906-4.65.906s-4.65-.406-4.65-.906zm0 3.301c0 .5 2.082.906 4.65.906s4.65-.406 4.65-.906v2.587c0 .5-2.082.906-4.65.906s-4.65-.406-4.65-.906z"></svg:path>`,
})
export class SimpleIconsNamesiloIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
