import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSignpostRoundedIcon],svg[material-symbols-light-signpost-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 20.5V17H7.171q-.331 0-.632-.13t-.518-.349l-1.455-1.455q-.243-.243-.243-.566t.243-.565l1.455-1.456q.218-.217.518-.348T7.171 12H11.5v-2H5.808q-.343 0-.576-.23T5 9.183V5.817q0-.357.232-.587T5.808 5H11.5V3.5q0-.213.144-.356T12.001 3t.356.144t.143.356V5h4.329q.331 0 .632.13t.518.349l1.455 1.455q.243.243.243.566t-.242.566L17.979 9.52q-.218.217-.518.348t-.632.131H12.5v2h5.692q.344 0 .576.23t.232.587v3.366q0 .357-.232.587t-.576.23H12.5v3.5q0 .213-.144.356t-.357.144t-.356-.144t-.143-.356"></svg:path>`,
})
export class MaterialSymbolsLightSignpostRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
