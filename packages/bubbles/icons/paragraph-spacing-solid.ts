import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesParagraphSpacingSolidIcon],svg[bubbles-paragraph-spacing-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.667 3.254a.667.667 0 0 0 .473-1.14L3.213.2a.667.667 0 0 0-.94 0L.36 2.114a.667.667 0 0 0 .473 1.14h1.08a.167.167 0 0 1 .167.166v9.16a.167.167 0 0 1-.167.167H.833a.667.667 0 0 0-.653.798c.025.13.088.248.18.342l1.913 1.907a.666.666 0 0 0 .94 0l1.914-1.907a.666.666 0 0 0-.46-1.14H3.58a.166.166 0 0 1-.167-.166V3.42a.167.167 0 0 1 .167-.167zm5.407-.96h5.094a.667.667 0 1 0 0-1.333h-5.094a.667.667 0 0 0 0 1.333m5.092 1.853h-7.96a.667.667 0 0 0 0 1.333h7.96a.667.667 0 1 0 0-1.333m0 3.186h-7.96a.667.667 0 0 0 0 1.334h7.96a.667.667 0 1 0 0-1.334m.002 3.187h-5.094a.667.667 0 1 0 0 1.334h5.094a.667.667 0 0 0 0-1.333m-.002 3.179h-7.96a.666.666 0 1 0 0 1.334h7.96a.667.667 0 1 0 0-1.334"></svg:path>`,
})
export class BubblesParagraphSpacingSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
