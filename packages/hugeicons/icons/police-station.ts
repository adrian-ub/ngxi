import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPoliceStationIcon],svg[hugeicons-police-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.618 7c.647.124 1.125.342 1.503.724c.879.888.879 2.318.879 5.178V22H6v-9.098c0-2.86 0-4.29.879-5.178c.378-.382.856-.6 1.503-.724M18 22h3c.471 0 .707 0 .854-.147C22 21.707 22 21.471 22 21v-5c0-1.886 0-2.828-.586-3.414S19.886 12 18 12M6 22H3c-.471 0-.707 0-.854-.147C2 21.707 2 21.471 2 21v-5c0-1.886 0-2.828.586-3.414S4.114 12 6 12m6 10v-3m-3-4h1.2m4.8 0h-1.2"></svg:path><svg:path d="M8.042 4C10.966 4 12 2 12 2s1.034 2 3.958 2c.217 1.688-.305 5.65-3.958 7c-3.652-1.35-4.175-5.312-3.958-7"></svg:path></svg:g>`,
})
export class HugeiconsPoliceStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
