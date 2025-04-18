import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBathroomIcon],svg[material-symbols-light-bathroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.001 17.77q.328 0 .548-.222t.22-.55t-.221-.547t-.55-.22t-.547.221t-.22.55t.221.547t.55.22m3 0q.327 0 .547-.221t.22-.55t-.221-.547t-.55-.22t-.547.221t-.22.55t.221.547t.55.22m3 0q.327 0 .547-.221t.22-.55t-.221-.547t-.55-.22t-.547.221t-.22.55t.221.547t.55.22m-6-3q.327 0 .547-.221t.22-.55t-.221-.547t-.55-.22t-.547.221t-.22.55t.221.547t.55.22m3 0q.327 0 .547-.221t.22-.55t-.221-.547t-.55-.22t-.547.221t-.22.55t.221.547t.55.22m3 0q.327 0 .547-.221t.22-.55t-.221-.547t-.55-.22t-.547.221t-.22.55t.221.547t.55.22m-7.386-3.384h8.769V11q0-1.806-1.29-3.095T12 6.615t-3.095 1.29T7.615 11zm-3 9.615q-.691 0-1.153-.462T3 19.385V4.615q0-.69.463-1.152T4.615 3h14.77q.69 0 1.152.463T21 4.616v14.769q0 .69-.463 1.153T19.385 21z"></svg:path>`,
})
export class MaterialSymbolsLightBathroomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
