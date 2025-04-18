import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatElectricPlugIcon],svg[fluent-emoji-flat-electric-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F3AD61" d="M13 7.076c0 .506.453.924 1 .924s1-.418 1-.924V2.924C15 2.418 14.547 2 14 2s-1 .418-1 .924zm5 0c0 .506.453.924 1 .924s1-.418 1-.924V2.924C20 2.418 19.547 2 19 2s-1 .418-1 .924z"></svg:path><svg:path fill="#533566" d="M11.06 9.935A1.5 1.5 0 0 1 10 8.5c0-.83.67-1.5 1.5-1.5h10c.83 0 1.5.67 1.5 1.5c0 .65-.412 1.203-.99 1.411v3.359A5.48 5.48 0 0 1 19 18.166v3.918c0 .507-.41.916-.916.916H18v7h-3v-7h-.084a.915.915 0 0 1-.916-.916v-3.958a5.48 5.48 0 0 1-2.94-4.856z"></svg:path><svg:path fill="#C790F1" d="M15 12h3c.27 0 .5-.23.5-.5c0-.28-.23-.5-.5-.5h-3c-.28 0-.5.23-.5.5s.23.5.5.5m0 2h3c.27 0 .5-.22.5-.5c0-.27-.23-.5-.5-.5h-3c-.28 0-.5.23-.5.5c0 .28.23.5.5.5"></svg:path></svg:g>`,
})
export class FluentEmojiFlatElectricPlugIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
