import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDiscoverTuneRoundedIcon],svg[material-symbols-light-discover-tune-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8.5q-.213 0-.356-.144t-.144-.357t.144-.356T14 7.5h2.5V4q0-.213.144-.356t.357-.144t.356.144T17.5 4v3.5H20q.213 0 .356.144t.144.357t-.144.356T20 8.5zm3 12q-.214 0-.357-.144T16.5 20v-8q0-.213.144-.356t.357-.144t.356.144t.143.356v8q0 .213-.144.356t-.357.144m-10 0q-.212 0-.356-.144T6.5 20v-3.5H4q-.213 0-.356-.144t-.144-.357t.144-.356T4 15.5h6q.213 0 .356.144t.144.357t-.144.356T10 16.5H7.5V20q0 .213-.144.356t-.357.144m0-8q-.212 0-.356-.144T6.5 12V4q0-.213.144-.356t.357-.144t.356.144T7.5 4v8q0 .213-.144.356t-.357.144"></svg:path>`,
})
export class MaterialSymbolsLightDiscoverTuneRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
