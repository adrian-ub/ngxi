import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHighlighterDuotoneIcon],svg[ph-highlighter-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m136 176l-40 40l-72-24l64-64Z" opacity=".2"></svg:path><svg:path d="M253.66 106.34a8 8 0 0 0-11.32 0L192 156.69l-82.34-82.35l-2.35-2.34l50.35-50.34a8 8 0 1 0-11.32-11.32L96 60.69a16 16 0 0 0-2.82 18.81L72 100.69a16 16 0 0 0 0 22.62l4.69 4.69l-58.35 58.34a8 8 0 0 0 3.13 13.25l72 24A7.9 7.9 0 0 0 96 224a8 8 0 0 0 5.66-2.34L136 187.31l4.69 4.69a16 16 0 0 0 22.62 0l21.18-21.18a16 16 0 0 0 18.82-2.82l50.35-50.34a8 8 0 0 0 0-11.32M93.84 206.85l-55-18.35L88 139.31L124.69 176ZM152 180.69l-10.34-10.35l-48-48L83.31 112L104 91.31L172.69 160Z"></svg:path></svg:g>`,
})
export class PhHighlighterDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
