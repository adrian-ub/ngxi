import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHologramIcon],svg[hugeicons-hologram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 22h18m-4-3l-1-4m-8 0l-1 4m5-3v3m0-12c.495 0 .956-.199 1.877-.595l.665-.287C16.181 5.412 17 5.059 17 4.5s-.82-.912-2.458-1.618l-.665-.287C12.958 2.198 12.496 2 12 2s-.956.199-1.877.595l-.665.287C7.819 3.588 7 3.941 7 4.5s.82.912 2.458 1.618l.665.287C11.043 6.8 11.505 7 12 7m0 0v6"></svg:path><svg:path d="M17 4.5v6c0 .559-.82.912-2.458 1.618l-.665.287c-.92.397-1.382.595-1.877.595s-.956-.198-1.877-.595l-.665-.287C7.819 11.412 7 11.059 7 10.5v-6"></svg:path></svg:g>`,
})
export class HugeiconsHologramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
