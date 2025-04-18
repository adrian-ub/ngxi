import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAirportIcon],svg[hugeicons-airport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 12H6v7c0 1.414 0 2.121.44 2.56C6.878 22 7.585 22 9 22h1zm8 3h-8v7h8c1.414 0 2.121 0 2.56-.44c.44-.439.44-1.146.44-2.56v-1c0-1.414 0-2.121-.44-2.56C20.122 15 19.415 15 18 15m3-9l-1 1m-3.5 0H20m0 0l-3 3h-1m4-3v3.5m-7.732-.382c-.366.912-.549 1.367-.93 1.625c-.38.257-.871.257-1.853.257H6.512c-.983 0-1.474 0-1.855-.257c-.38-.258-.563-.713-.93-1.625l-.15-.375c-.5-1.243-.749-1.864-.45-2.304S4.097 7 5.442 7h5.113c1.344 0 2.015 0 2.314.44c.299.439.05 1.06-.45 2.303z"></svg:path><svg:path d="M9.996 7H6.004c-.815-1.268-1.155-1.902-.942-2.404C5.347 4.134 6.15 4 7.62 4h.76c1.47 0 2.273.134 2.558.596c.213.502-.127 1.136-.942 2.404M8 4V2"></svg:path></svg:g>`,
})
export class HugeiconsAirportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
