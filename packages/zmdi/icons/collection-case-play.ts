import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionCasePlayIcon],svg[zmdi-collection-case-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 176v235h341q0 17-12.5 29.5T341 453H43q-18 0-30.5-12.5T0 411V176zm320-85h106v234q0 18-12.5 30.5T427 368H128q-18 0-30.5-12.5T85 325V91h107V48q0-18 12.5-30.5T235 5h85q18 0 30.5 12.5T363 48zM235 48v43h85V48zm0 256l117-85l-117-64z"></svg:path>`,
})
export class ZmdiCollectionCasePlayIcon {
  readonly viewBox = input("0 0 472 456")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
