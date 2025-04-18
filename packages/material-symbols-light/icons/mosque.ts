import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMosqueIcon],svg[material-symbols-light-mosque-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.142 8.742q-.717 0-1.18-.462T6.5 7.1q0-.865.417-1.61q.418-.744 1.122-1.217L12 1.596l3.962 2.677q.704.473 1.12 1.218q.418.744.418 1.609q0 .717-.462 1.18t-1.18.462zM1.5 20.5V8.437q-.45-.218-.725-.588T.5 7q0-.44.389-1.025T2 4.712q.723.679 1.112 1.263T3.5 7q0 .479-.275.849t-.725.588V13.5h3V11q0-.586.39-1.017t1.006-.472h10.208q.615.041 1.006.472q.39.43.39 1.017v2.5h3V8.437q-.45-.218-.725-.588T20.5 7q0-.44.389-1.025T22 4.712q.723.679 1.112 1.263T23.5 7q0 .479-.275.849t-.725.588V20.5h-8.77V17q0-.71-.51-1.22T12 15.27t-1.22.51t-.51 1.22v3.5z"></svg:path>`,
})
export class MaterialSymbolsLightMosqueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
