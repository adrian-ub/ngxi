import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faMagnetIcon],svg[fa-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1536 704v128q0 201-98.5 362t-274 251.5T768 1536t-395.5-90.5t-274-251.5T0 832V704q0-26 19-45t45-19h384q26 0 45 19t19 45v128q0 52 23.5 90t53.5 57t71 30t64 13t44 2t44-2t64-13t71-30t53.5-57t23.5-90V704q0-26 19-45t45-19h384q26 0 45 19t19 45M512 64v384q0 26-19 45t-45 19H64q-26 0-45-19T0 448V64q0-26 19-45T64 0h384q26 0 45 19t19 45m1024 0v384q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45V64q0-26 19-45t45-19h384q26 0 45 19t19 45"></svg:path>`,
})
export class FaMagnetIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}
