import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsCubeLineIcon],svg[majesticons-cube-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.447 4.342a1 1 0 0 0-.894 0L6.236 7L12 9.882L17.764 7l-5.317-2.658zM19 8.618l-6 3v7.764l5.447-2.724a1 1 0 0 0 .553-.894V8.618zm-8 10.764v-7.764l-6-3v7.146a1 1 0 0 0 .553.894L11 19.382zm-.342-16.83a3 3 0 0 1 2.684 0l7.105 3.554A1 1 0 0 1 21 7v8.764a3 3 0 0 1-1.658 2.683l-6.895 3.447a1 1 0 0 1-.894 0l-6.895-3.447A3 3 0 0 1 3 15.764V7a1 1 0 0 1 .553-.894l7.105-3.553z"></svg:path></svg:g>`,
})
export class MajesticonsCubeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
