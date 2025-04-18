import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconBeatsIcon],svg[devicon-beats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#07c" d="M93.352 54.215A39.8 39.8 0 0 0 96 40C96 17.906 78.094 0 56 0H12v48h60c7.86 0 15.168 2.3 21.352 6.215"></svg:path><svg:path fill="#00bfb3" d="M102.809 62.496C94.399 79.922 76.609 92 56 92H12v36h60c22.09 0 40-17.914 40-40a39.83 39.83 0 0 0-9.191-25.512"></svg:path><svg:path fill="#343741" d="M93.352 54.215A39.8 39.8 0 0 0 72 48H12v32h44c17.078 0 31.613-10.719 37.352-25.785"></svg:path>`,
})
export class DeviconBeatsIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
