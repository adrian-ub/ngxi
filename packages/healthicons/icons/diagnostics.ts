import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsDiagnosticsIcon],svg[healthicons-diagnostics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="2" d="m38.972 25.173l.01.01l-.61.501a5.6 5.6 0 0 0 .964-1.071zM19.192 17.1l-1.09 1.773l-2.658-5.379l-.8-1.621l-.948 1.54l-3.05 4.961H5V11h31.952v1.194A10 10 0 0 0 34.998 12a9.71 9.71 0 0 0-8.31 4.625h-7.203zm2.527 3.524h3.64q-.04.432-.04.873c0 5.265 4.353 9.498 9.679 9.498q1.004-.002 1.954-.194V33H5V22.375h7.879l.293-.476l1.09-1.773l2.658 5.379l.739 1.495h-2.673v-4H6.994v8h13.983v-4H17.8l.87-1.414zM25.969 37Zm-.001 0Zm-9.985 0q-.002 0 0 0q-.001 0 0 0Z"></svg:path>`,
})
export class HealthiconsDiagnosticsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
