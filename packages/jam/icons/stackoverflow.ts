import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamStackoverflowIcon],svg[jam-stackoverflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.492 18.136v-5.272h1.665v7.022H.13v-7.022h1.665v5.272z"></svg:path><svg:path d="m3.632 12.364l8.173 1.795l.346-1.727l-8.173-1.796zm1.082-4.091l7.567 3.704l.692-1.59l-7.568-3.728zm2.097-3.91l6.421 5.614l1.06-1.34L7.87 3.022l-1.06 1.34zM10.962.206L9.622 1.25l4.973 7.045l1.34-1.045zM3.46 16.364h8.346v-1.75H3.46z"></svg:path></svg:g>`,
})
export class JamStackoverflowIcon {
  readonly viewBox = input("-4 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
