import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFileLockedIcon],svg[hugeicons-file-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.003 21.997h-.273c-3.256 0-4.884 0-6.015-.798a4.1 4.1 0 0 1-.854-.805c-.846-1.066-.846-2.6-.846-5.67V12.18c0-2.963 0-4.445.468-5.628c.753-1.903 2.345-3.403 4.363-4.113c1.255-.44 2.827-.44 5.97-.44c1.797 0 2.695 0 3.412.251c1.153.406 2.063 1.263 2.493 2.35c.268.676.268 1.523.268 3.216v2.182"></svg:path><svg:path d="M3.002 11.997a3.33 3.33 0 0 1 3.33-3.333c.666 0 1.45.116 2.097-.057a1.67 1.67 0 0 0 1.177-1.179c.174-.647.057-1.432.057-2.098a3.33 3.33 0 0 1 3.33-3.333m2.751 14.18v-1.39c0-.206.008-.414.082-.606c.195-.51.714-1.179 1.658-1.179s1.483.669 1.679 1.18c.073.191.082.4.082.605v1.39m-3.432 5.825h3.383c.996 0 1.803-.807 1.803-1.802v-2.002c0-.995-.807-1.802-1.803-1.802h-3.383c-.996 0-1.803.807-1.803 1.802V20.2c0 .995.807 1.802 1.803 1.802"></svg:path></svg:g>`,
})
export class HugeiconsFileLockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
