import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTrackpadInputOutlineSharpIcon],svg[material-symbols-light-trackpad-input-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.671 21q-.504 0-.948-.186t-.812-.554l-4.35-4.337l1.004-1.054l2.781.652V8.02h1v8.825l-3.238-.815l3.498 3.537q.227.226.488.33q.262.104.577.104h3.483q1.037 0 1.768-.732q.732-.731.732-1.768v-3.673h1V17.5q0 1.458-1.021 2.479T18.153 21zm.445-6.423v-4.52h1v4.52zm2.769 0v-3.135h1v3.135zM18.154 20h-4.548zM3 18V4h17v5.058h-1V5H4v12h2.416l.993 1z"></svg:path>`,
})
export class MaterialSymbolsLightTrackpadInputOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
