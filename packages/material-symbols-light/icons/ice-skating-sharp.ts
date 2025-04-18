import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightIceSkatingSharpIcon],svg[material-symbols-light-ice-skating-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 21.5v-1h4v-3h-3v-14h7.308v2.616H8.116v.769h2.761v1.23H8.116v.77h3.034q.312.575.83.975t1.168.6l5.16 1.428V17.5H15.5v3H18q1.346 0 2.356-.836q1.01-.837 1.144-2.164h1q-.134 1.729-1.443 2.865Q19.748 21.5 18 21.5zm5-1h7v-3h-7z"></svg:path>`,
})
export class MaterialSymbolsLightIceSkatingSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
