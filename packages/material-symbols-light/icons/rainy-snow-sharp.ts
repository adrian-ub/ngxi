import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRainySnowSharpIcon],svg[material-symbols-light-rainy-snow-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.78 18.677l-1.957-3.896l.896-.458l1.958 3.89zm9 0l-4.957-9.896l.896-.458l4.958 9.89zm-4.03.054q-.31 0-.52-.21t-.21-.52t.21-.521q.209-.21.52-.21t.52.21q.21.209.21.52t-.21.52q-.209.21-.52.21m9.03-.053l-.957-1.896l.896-.458l.952 1.896zm-11-3L5.824 5.781l.896-.452l4.952 9.89zm9.22-.946q-.31 0-.52-.21t-.21-.52t.21-.521q.209-.21.52-.21t.52.21q.21.209.21.52t-.21.52q-.209.21-.52.21m-15-2q-.31 0-.52-.21q-.21-.209-.21-.52t.21-.52q.209-.21.52-.21t.52.21q.21.209.21.52t-.21.52q-.209.21-.52.21m13.28-1.053l-2.957-5.896l.896-.458l2.952 5.896zm-15-2L1.324 5.781l.896-.452l1.952 3.89zm7.97-2.946q-.31 0-.52-.21T10.52 6t.21-.521q.209-.21.52-.21t.52.21q.21.209.21.52t-.21.52q-.209.21-.52.21"></svg:path>`,
})
export class MaterialSymbolsLightRainySnowSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
