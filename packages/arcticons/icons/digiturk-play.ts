import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDigiturkPlayIcon],svg[arcticons-digiturk-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.26 9.88a3.303 3.303 0 0 1 3.303 3.303h0a3.303 3.303 0 0 1-3.304 3.303h0m5.416 0V12.31"></svg:path><svg:circle cx="17.772" cy="14.398" r="2.088" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="13.675" cy="10.495" r=".75" fill="currentColor"></svg:circle><svg:circle cx="17.723" cy="19.332" r="1.587" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.812 16.486V12.31"></svg:path><svg:circle cx="21.812" cy="10.495" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.121 16.486v-5.625m0 1.449h1.234m5.811 0v2.088a2.088 2.088 0 0 1-4.176 0V12.31m8.217 0a2.09 2.09 0 0 0-2.088 2.088v2.088m3.628 0V9.879m.475 4.519l2.519-2.088m-2.519 2.088l2.519 2.088"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.843 38.65V24h4.023v10.353h-4.023M19.902 24v10.353M23.454 24h4.698v10.353h-4.698v-6.004h4.698"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.157 24v14.65H19.902M31.636 24v10.353h4.522"></svg:path>`,
})
export class ArcticonsDigiturkPlayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
