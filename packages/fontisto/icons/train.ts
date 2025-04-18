import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoTrainIcon],svg[fontisto-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.002 15.088a.684.684 0 0 1 .683-.682h2.743a.684.684 0 0 1 .683.682a.684.684 0 0 1-.683.682H2.682a.684.684 0 0 1-.683-.682zm.8-13.1h12.151a.8.8 0 0 1 .8.799v.001l-.41 9.16a.8.8 0 0 1-.8.8H3.21a.8.8 0 0 1-.8-.799v-.001L2 2.788a.8.8 0 0 1 .8-.8zm12.889 13.1a.684.684 0 0 1-.683.682h-2.746a.684.684 0 0 1-.683-.682a.684.684 0 0 1 .683-.682h2.746c.376.002.68.306.682.682zM1.58 18.642h14.594a.93.93 0 0 0 .926-.926V.927a.93.93 0 0 0-.926-.926H1.579a.93.93 0 0 0-.926.926v16.789a.93.93 0 0 0 .926.926zM0 24h3.906l2.218-4.44H4.069zm13.686-4.44h-2.055L13.849 24h3.906z"></svg:path>`,
})
export class FontistoTrainIcon {
  readonly viewBox = input("0 0 18 24")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
