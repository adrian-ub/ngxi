import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMetroRoundedIcon],svg[material-symbols-metro-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19.5V4.9q0-.8.55-1.35T4.9 3h.85q.6 0 1.088.325t.687.9L12 16.05l4.4-11.725q.225-.6.75-.963T18.325 3h.625q.85 0 1.45.6t.6 1.45V19.5q0 .625-.437 1.063T19.5 21t-1.062-.437T18 19.5V8.75l-4.425 11.475q-.125.35-.425.563t-.675.212h-.95q-.375 0-.675-.213t-.425-.562L6 8.825V19.5q0 .625-.437 1.063T4.5 21t-1.062-.437T3 19.5"></svg:path>`,
})
export class MaterialSymbolsMetroRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
