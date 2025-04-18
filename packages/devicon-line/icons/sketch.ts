import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconLineSketchIcon],svg[devicon-line-sketch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m63.81 118.63l-61-70.46v-.31l26.61-35.45l.17-.1L64 8.7l34.43 3.61l.17.1l26.6 35.44v.31l-61 70.46zM3.32 48L64 118.08L124.68 48L98.25 12.79L64 9.2l-34.25 3.59z"></svg:path><svg:path d="m63.81 118.63l-61-70.46l.19-.42h24.71l.22.14l36.29 70.46zM3.55 48.25l59.27 68.47l-35.26-68.47z"></svg:path><svg:path d="m64.19 118.63l-.41-.28l36.29-70.46l.22-.14H125l.19.41zm36.26-70.38l-35.27 68.47l59.27-68.47z"></svg:path><svg:path d="M64.22 118.58h-.44L27.49 48.11l.22-.36h72.58l.22.36zm-36.1-70.33L64 117.92l35.88-69.67z"></svg:path><svg:path d="m27.89 48.17l-.43-.17l1.91-35.44l.22-.23L64 8.7l.21.42zm2-35.39L28 47.32L63.36 9.27z"></svg:path><svg:path d="m100.11 48.17l-36.29-39L64 8.7l34.38 3.6l.22.23L100.54 48zM64.64 9.27L100 47.32l-1.86-34.54z"></svg:path><svg:path d="M125 48.25h-24.71L100 48l-1.87-35.43l.45-.16l26.62 35.44zm-24.47-.5h24L98.68 13.36z"></svg:path><svg:path d="M100.29 48.25H27.71l-.18-.42l36.29-39h.37l36.29 39zm-72-.5h71.43L64 9.32z"></svg:path><svg:path d="M27.71 48.25H3l-.2-.4l26.62-35.44l.45.16L28 48zm-24.21-.5h24l1.85-34.39z"></svg:path></svg:g>`,
})
export class DeviconLineSketchIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
