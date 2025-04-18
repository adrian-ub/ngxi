import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLampIcon],svg[hugeicons-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2c1.635 0 2.452 0 3.165.29c.383.155.74.37 1.058.638c.59.496.977 1.223 1.75 2.676l.8 1.503c1.401 2.63 2.101 3.946 1.524 4.92S18.241 13 15.281 13H8.72c-2.96 0-4.44 0-5.016-.974c-.577-.973.123-2.288 1.523-4.919l.8-1.503C6.8 4.15 7.188 3.424 7.778 2.928a4 4 0 0 1 1.058-.638C9.548 2 10.365 2 12 2m0 11v6m-2.544 1.3c.27-.456.404-.683.6-.852c.2-.172.447-.3.718-.375c.267-.073.568-.073 1.17-.073h.112c.602 0 .903 0 1.17.073c.272.075.518.203.718.375c.197.169.331.396.6.851c.322.543.482.815.452 1.036a.75.75 0 0 1-.398.544c-.22.121-.58.121-1.298.121h-2.6c-.719 0-1.078 0-1.299-.121a.75.75 0 0 1-.398-.544c-.03-.222.131-.493.453-1.036" color="currentColor"></svg:path>`,
})
export class HugeiconsLampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
