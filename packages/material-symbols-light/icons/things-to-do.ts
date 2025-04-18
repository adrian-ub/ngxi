import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightThingsToDoIcon],svg[material-symbols-light-things-to-do-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.077 20v-1H7v-4.5H5.539v-1h1.484q.07-1.798 1.365-3.055T11.5 9.023V4.846h5.077v2.846H12.5v1.331q1.817.166 3.113 1.422t1.364 3.055h1.485v1H17V19h2.923v1zM8 19h3.5v-4.5H8zm4.5 0H16v-4.5h-3.5z"></svg:path>`,
})
export class MaterialSymbolsLightThingsToDoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
