import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapDistanceIcon],svg[tdesign-map-distance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm12.5 3a.5.5 0 0 0-.5.5c0 .222.157.545.488.907l.012.013l.012-.013c.33-.362.488-.685.488-.907a.5.5 0 0 0-.5-.5m0 3.964c-.294-.202-.594-.396-.87-.622a6 6 0 0 1-.618-.585C14.592 9.298 14 8.497 14 7.5a2.5 2.5 0 0 1 5 0c0 .997-.593 1.798-1.012 2.257a6 6 0 0 1-.618.585c-.276.227-.576.42-.87.622M8.5 10a.5.5 0 0 0-.5.5c0 .222.157.545.488.907l.012.013l.012-.013c.33-.362.488-.685.488-.907a.5.5 0 0 0-.5-.5m0 3.964c-.221-.152-.447-.299-.662-.459a6 6 0 0 1-.826-.748C6.592 12.298 6 11.497 6 10.5a2.5 2.5 0 0 1 5 0c0 .997-.593 1.798-1.012 2.257a6 6 0 0 1-.826.748c-.215.16-.441.307-.662.459m11.288-.379l-5.873 2.202l-.702-1.872l5.872-2.202zm-8 3l-5.873 2.203l-.702-1.873l5.872-2.202z"></svg:path>`,
})
export class TdesignMapDistanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
