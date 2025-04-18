import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatSunriseIcon],svg[fluent-emoji-flat-sunrise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FF5E59" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v15.5H2z"></svg:path><svg:path fill="#FF9F2E" d="M14.609 6.348a2 2 0 0 1 2.782 0l.857.829a1 1 0 0 0 .836.272l1.18-.167a2 2 0 0 1 2.25 1.635l.207 1.178a1 1 0 0 0 .516.71l1.056.562a2 2 0 0 1 .859 2.643l-.526 1.078a1 1 0 0 0 0 .877l.526 1.077a2 2 0 0 1-.86 2.644l-1.055.56a1 1 0 0 0-.516.711l-.207 1.179a2 2 0 0 1-2.25 1.635l-1.18-.167a1 1 0 0 0-.836.272l-.857.83a2 2 0 0 1-2.782 0l-.857-.83a1 1 0 0 0-.836-.272l-1.18.167a2 2 0 0 1-2.25-1.635l-.207-1.179a1 1 0 0 0-.516-.71l-1.056-.561a2 2 0 0 1-.859-2.644l.526-1.077a1 1 0 0 0 0-.877l-.526-1.077a2 2 0 0 1 .86-2.644l1.055-.561a1 1 0 0 0 .516-.71l.207-1.18a2 2 0 0 1 2.25-1.634l1.18.167a1 1 0 0 0 .836-.272z"></svg:path><svg:path fill="#FCD53F" d="M16 23a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15"></svg:path><svg:path fill="#46A4FB" d="M5.997 30A4 4 0 0 1 2 26v-5.5c.375-.25.75-.5 1.5-.5s1.125.25 1.5.5s.75.5 1.5.5s1.125-.25 1.5-.5s.75-.5 1.5-.5s1.25.25 1.75.5s1 .5 1.75.5s1.125-.25 1.5-.5s.75-.5 1.5-.5s1.125.25 1.5.5s.75.5 1.5.5s1.25-.25 1.75-.5s1-.5 1.75-.5s1.125.25 1.5.5s.75.5 1.5.5s1.125-.25 1.5-.5s.75-.5 1.5-.5s1.125.25 1.5.5V26a4 4 0 0 1-3.997 4z"></svg:path><svg:path fill="#fff" d="M8.5 23a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1zm4 3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatSunriseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
