import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWifi2BarSharpIcon],svg[material-symbols-light-wifi-2-bar-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.35 15.35l-1.023-1.034q1.334-1.346 3.056-2.061q1.722-.716 3.616-.716q1.893 0 3.617.722q1.725.722 3.057 2.066L17.65 15.35q-1.125-1.125-2.587-1.737T12 13t-3.062.613T6.35 15.35M12 21l-2.448-2.454q.486-.486 1.119-.747q.633-.26 1.327-.26t1.329.26t1.121.747z"></svg:path>`,
})
export class MaterialSymbolsLightWifi2BarSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
