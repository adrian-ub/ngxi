import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGarbageTruckIcon],svg[hugeicons-garbage-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="17" cy="18" r="2"></svg:circle><svg:circle cx="7" cy="18" r="2"></svg:circle><svg:path d="M11 9v3m-4-2v2m10-8h-2m0 0H9.485c-1.226 0-1.84 0-2.39.228c-.552.229-.985.662-1.852 1.53L3.464 7.535c-.722.722-1.083 1.083-1.274 1.543c-.19.46-.19.97-.19 1.992V13c0 2.357 0 3.535.732 4.268c.487.487 1.171.65 2.268.704M15 4v4c0 1.886 0 2.828.586 3.414S17.114 12 19 12h3v1c0 2.357 0 3.535-.732 4.268c-.487.487-1.171.65-2.268.704M9 18h6"></svg:path><svg:path d="M15 7h1.7c1.358 0 2.037 0 2.59.354c.553.353.875.994 1.519 2.276L22 12"></svg:path></svg:g>`,
})
export class HugeiconsGarbageTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
