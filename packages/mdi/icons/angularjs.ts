import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAngularjsIcon],svg[mdi-angularjs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2.5l8.84 3.15l-1.34 11.7L12 21.5l-7.5-4.15l-1.34-11.7zm0 2L5 7l1.08 9.22L12 19.5l5.92-3.28L19 7zm0 1.22L16.58 16h-1.71l-.93-2.28h-3.9L9.12 16H7.41zm1.34 6.58L12 9.07l-1.34 3.23z"></svg:path>`,
})
export class MdiAngularjsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
