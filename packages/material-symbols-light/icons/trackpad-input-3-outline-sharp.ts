import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTrackpadInput3OutlineSharpIcon],svg[material-symbols-light-trackpad-input-3-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.154 21h-4.502l-5.09-5.077l1.004-1.054l2.78.652V8.02h1v8.825l-3.238-.815l3.498 3.537q.227.226.488.33q.262.104.577.104h3.483q1.037 0 1.768-.732q.732-.731.732-1.768v-3.673h1V17.5q0 1.458-1.021 2.479T18.153 21m-3.037-6.423V6.75h1v7.827zm2.769 0V8.519h1v6.058zM18.154 20h-4.548zM3 18V4h17v1H4v12h2.416l.993 1z"></svg:path>`,
})
export class MaterialSymbolsLightTrackpadInput3OutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
