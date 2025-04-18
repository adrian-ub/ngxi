import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSoilMoistureGlobalIcon],svg[hugeicons-soil-moisture-global-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 19.503c0-1.255 1.053-2.495 1.792-3.211a1.004 1.004 0 0 1 1.416 0c.739.716 1.792 1.956 1.792 3.211C22 20.734 21.053 22 19.5 22S17 20.734 17 19.503M22 12c-4.1 0-7.625 2.468-9.168 6m9.166-10C15.656 8 10.3 12.217 8.578 18"></svg:path><svg:path d="M22 4C13.432 4 6.263 9.984 4.444 18M2 10c.878 0 1.73.113 2.541.326M2 6c1.866 0 3.647.365 5.275 1.028M2 2c3.175 0 6.159.822 8.749 2.265"></svg:path></svg:g>`,
})
export class HugeiconsSoilMoistureGlobalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
