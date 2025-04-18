import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatFishingPoleIcon],svg[fluent-emoji-flat-fishing-pole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#D3D3D3" d="M10 14V8h1v6z"></svg:path><svg:path fill="#0074BA" d="M9 13.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"></svg:path><svg:path fill="#6D4534" d="M11.772 8.296a1.5 1.5 0 0 1-2.544-1.591v-.001l.002-.001l.001-.003l.004-.006l.01-.017a5 5 0 0 1 .146-.213c.094-.135.23-.318.406-.535c.35-.431.869-1.003 1.55-1.576C12.702 3.21 14.783 2 17.5 2c4.26 0 8.5 3.603 8.5 8.5v18a1.5 1.5 0 0 1-3 0v-18C23 7.397 20.242 5 17.5 5c-1.782 0-3.202.789-4.221 1.647a9 9 0 0 0-1.154 1.174a7 7 0 0 0-.345.463l-.01.016z"></svg:path><svg:path fill="#BEBEBE" d="M25 20.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path fill="#636363" d="M21.5 19.13a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25m-2 2a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25m4 0a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25m-1.375 1.375a.625.625 0 1 1-1.25 0a.625.625 0 0 1 1.25 0"></svg:path><svg:path fill="#00A6ED" d="M9 27c0-.5-3-2-3-8.5h9c0 6.5-3 8-3 8.5v.5c0 .145.252.164.61.19c.877.066 2.39.18 2.39 2.31h-2.5c-1 0-2-1-2-1.5c0 .5-1 1.5-2 1.5H6c0-2.13 1.513-2.244 2.39-2.31c.358-.026.61-.045.61-.19z"></svg:path><svg:path fill="#26EAFC" d="M15 18.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0"></svg:path><svg:path fill="#533566" d="M11 17.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"></svg:path></svg:g>`,
})
export class FluentEmojiFlatFishingPoleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
