import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCounter3OutlineRoundedIcon],svg[material-symbols-light-counter-3-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m-2-3.5h2.885q.69 0 1.153-.462t.462-1.153V13.23q0-.592-.31-.883q-.31-.29-.69-.348q.38-.058.69-.348t.31-.883V9.115q0-.69-.462-1.153T12.885 7.5H10q-.213 0-.356.144t-.144.357t.144.356T10 8.5h2.885q.269 0 .442.173t.173.443v1.769q0 .269-.173.442t-.442.173h-1.27q-.212 0-.356.144t-.144.357t.144.356t.356.143h1.27q.269 0 .442.173t.173.443v1.769q0 .269-.173.442t-.442.173H10q-.213 0-.356.144t-.144.357t.144.356t.356.143"></svg:path>`,
})
export class MaterialSymbolsLightCounter3OutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
