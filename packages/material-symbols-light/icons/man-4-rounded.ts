import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMan4RoundedIcon],svg[material-symbols-light-man-4-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.144 20.798L8.684 9.237q-.086-.727.399-1.27q.484-.544 1.211-.544h3.412q.727 0 1.211.543q.485.544.399 1.27l-1.46 11.562q-.05.298-.28.5q-.229.202-.528.202h-2.096q-.3 0-.528-.202q-.23-.202-.28-.5M12 5.808q-.698 0-1.195-.497t-.497-1.195t.497-1.196T12 2.423t1.195.497t.497 1.196q0 .698-.497 1.195T12 5.808"></svg:path>`,
})
export class MaterialSymbolsLightMan4RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
