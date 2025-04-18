import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAudioBook04Icon],svg[hugeicons-audio-book-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 12.574c0-.302 0-.453.042-.588c.12-.391.44-.543.759-.702c.359-.18.539-.269.716-.284a.94.94 0 0 1 .577.135c.23.14.389.408.552.625c.755 1.002 1.132 1.503 1.27 2.056a2.8 2.8 0 0 1 0 1.358c-.201.806-.837 1.481-1.308 2.107c-.241.32-.362.48-.514.573a.94.94 0 0 1-.577.136c-.177-.016-.357-.106-.716-.284c-.32-.16-.638-.311-.76-.703c-.041-.135-.041-.286-.041-.588zm-12 .001c0-.381-.01-.723-.291-.991c-.103-.097-.239-.165-.51-.3c-.36-.179-.539-.268-.717-.284c-.533-.047-.82.351-1.128.76c-.755 1.002-1.132 1.503-1.27 2.056a2.8 2.8 0 0 0 0 1.358c.2.806.837 1.481 1.308 2.107c.297.394.58.754 1.09.708c.178-.015.358-.105.717-.284c.271-.135.407-.202.51-.3c.281-.267.29-.61.29-.99z"></svg:path><svg:path d="M20 10.996V9.87C20 5.524 16.417 2 12 2S4 5.524 4 9.87v1.125m7.998 2.465c-1.246-.66-4-1.781-5.264-1.44c-.24.1-.736.445-.736 1.599l.096 5.977c.006.37.292.673.654.724c1.233.174 3.332.674 5.25 1.68m0-8.54V22m0-8.54c1.245-.66 4-1.781 5.264-1.44c.24.1.736.445.736 1.599l-.095 5.977a.754.754 0 0 1-.654.724c-1.233.174-3.333.674-5.251 1.68"></svg:path></svg:g>`,
})
export class HugeiconsAudioBook04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
