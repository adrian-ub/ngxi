import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLooks5RoundedIcon],svg[material-symbols-light-looks-5-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.885 16.5q.69 0 1.153-.462t.462-1.153v-1.77q0-.69-.462-1.152t-1.153-.463H10.5v-3H14q.214 0 .357-.143T14.5 8t-.143-.357T14 7.5h-3.692q-.348 0-.578.23t-.23.578v3.384q0 .349.23.578t.578.23h2.576q.27 0 .443.173t.173.443v1.769q0 .269-.173.442t-.442.173H10q-.213 0-.357.143T9.5 16t.143.357t.357.143zM5.615 20q-.69 0-1.152-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20z"></svg:path>`,
})
export class MaterialSymbolsLightLooks5RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
