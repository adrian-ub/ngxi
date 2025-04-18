import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCentricaHiveIcon],svg[arcticons-centrica-hive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.528 11.73s5.62-.782 8.472-.782s8.472.783 8.472.783M11.47 17.308s8.331.76 12.53.76s12.53-.76 12.53-.76M9.5 22.386s9.608 2.267 14.5 2.267s14.5-2.267 14.5-2.267m-28.264 5.577S19.32 30.716 24 30.716s13.764-2.753 13.764-2.753M13.06 33.896s7.144 3.156 10.94 3.156s10.94-3.156 10.94-3.156"></svg:path>`,
})
export class ArcticonsCentricaHiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
