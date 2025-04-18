import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRoundaboutRightIcon],svg[material-symbols-light-roundabout-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.02 20v-5.017q0-.154-.116-.28q-.116-.124-.27-.162q-1.988-.332-3.311-1.788Q3 11.296 3 9.308q0-2.212 1.558-3.76T8.327 4q1.989 0 3.455 1.314t1.797 3.302q.038.153.154.269q.115.115.269.115h5.077l-2.095-2.1l.708-.708L21 9.5l-3.308 3.308l-.713-.708l2.1-2.1h-5.044q-.552 0-.968-.36t-.501-.911q-.27-1.604-1.45-2.666Q9.936 5 8.327 5Q6.542 5 5.271 6.262Q4 7.523 4 9.308q0 1.61 1.072 2.789t2.676 1.45q.552.086.912.501t.36.968V20z"></svg:path>`,
})
export class MaterialSymbolsLightRoundaboutRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
