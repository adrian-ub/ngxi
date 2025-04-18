import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDna2OffIcon],svg[tabler-dna-2-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 3v1q-.012 3.69-2.705 6.281M12 12c-3.328 1.99-5 4.662-5.008 8.014v1m10.008 0v-1c0-1.44-.315-2.755-.932-3.944M12 12c-1.903-1.138-3.263-2.485-4.082-4.068M8 4h9M7 20h10M12 8h4m-8 8h8M3 3l18 18"></svg:path>`,
})
export class TablerDna2OffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
