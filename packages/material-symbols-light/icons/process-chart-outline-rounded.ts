import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightProcessChartOutlineRoundedIcon],svg[material-symbols-light-process-chart-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.208 17.558q-.183-.085-.253-.29t.014-.387L8.09 6.66q.084-.182.28-.243t.377.024t.253.29t-.014.387l-5.12 10.22q-.084.182-.28.243q-.194.06-.377-.024m6.023 0q-.183-.085-.253-.29t.014-.387l5.12-10.22q.084-.182.28-.243q.195-.06.377.024q.183.085.253.29t-.014.387l-5.12 10.22q-.084.182-.28.243q-.194.06-.377-.024m6.023 0q-.183-.085-.253-.29t.014-.387l5.12-10.22q.084-.182.28-.243q.195-.06.377.024q.183.085.253.29t-.014.387l-5.12 10.22q-.084.182-.28.243t-.377-.024"></svg:path>`,
})
export class MaterialSymbolsLightProcessChartOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
