import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPasswordFingerprintIcon],svg[tabler-password-fingerprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 8c.788 1 1 2 1 3v1m-9-1c0-1.578 1.343-3 3-3s3 1.422 3 3v2m-3-2v2"></svg:path><svg:path d="M6 12v-1.397c-.006-1.999 1.136-3.849 2.993-4.85A6.39 6.39 0 0 1 15 5.748M12 17v4m-2-1l4-2m-4 0l4 2m-9-3v4m-2-1l4-2m-4 0l4 2m12-3v4m-2-1l4-2m-4 0l4 2"></svg:path></svg:g>`,
})
export class TablerPasswordFingerprintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
