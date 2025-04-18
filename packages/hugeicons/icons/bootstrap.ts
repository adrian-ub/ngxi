import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBootstrapIcon],svg[hugeicons-bootstrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.882 12c1.17 0 2.118.895 2.118 2s-.948 2-2.118 2H10.6c-.754 0-1.131 0-1.366-.234C9 15.53 9 15.154 9 14.4V12m3.882 0c1.17 0 2.118-.895 2.118-2s-.948-2-2.118-2H10.6c-.754 0-1.131 0-1.366.234C9 8.47 9 8.846 9 9.6V12m3.882 0H9"></svg:path><svg:path d="M22 12a2 2 0 0 1-2-2V8c0-3.31-.69-4-4-4H8c-3.31 0-4 .69-4 4v2a2 2 0 0 1-2 2m0 0a2 2 0 0 1 2 2v2c0 3.31.69 4 4 4h8c3.31 0 4-.69 4-4v-2a2 2 0 0 1 2-2"></svg:path></svg:g>`,
})
export class HugeiconsBootstrapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
