import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMathQuizGameIcon],svg[arcticons-math-quiz-game-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.98 13.754h5.305c.964 0 1.746.783 1.746 1.748h0v5.068c0 .965-.782 1.748-1.746 1.748H15.98a1.747 1.747 0 0 1-1.746-1.748h0v-5.068c0-.966.781-1.748 1.746-1.748m.443 4.282h4.42M5.246 13.754h5.304c.964 0 1.746.783 1.746 1.748v5.068c0 .965-.782 1.748-1.746 1.748H5.246A1.747 1.747 0 0 1 3.5 20.57h0v-5.068c0-.966.782-1.748 1.746-1.748m2.652 2.201v4.162m-2.081-2.081h4.162m-4.733 7.646h5.304c.964 0 1.746.783 1.746 1.748v5.068c0 .966-.782 1.748-1.746 1.748H5.246A1.747 1.747 0 0 1 3.5 32.498V27.43c0-.965.782-1.748 1.746-1.748m4.463 2.469l-3.621 3.626m-.105-3.73l3.83 3.835m6.167-6.2h5.305c.964 0 1.746.783 1.746 1.748h0v5.068c0 .966-.782 1.748-1.746 1.748H15.98a1.747 1.747 0 0 1-1.746-1.748V27.43c0-.965.781-1.748 1.746-1.748m.443 4.282h4.42"></svg:path><svg:path fill="currentColor" d="M19.383 31.892a.75.75 0 0 1-1.5 0a.75.75 0 0 1 1.5 0m0-3.845a.75.75 0 0 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.715 13.754h5.304c.965 0 1.746.783 1.746 1.748v5.068c0 .965-.781 1.748-1.746 1.748h-5.304a1.747 1.747 0 0 1-1.746-1.748h0v-5.068c0-.966.782-1.748 1.746-1.748"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m27.014 18.097l1.21 1.92l1.413-3.988h2.083m9.068.025c0-.482.482-.862 1.034-.766c.362.063.651.346.687.678a.71.71 0 0 1-.248.64c-.349.277-1.473 1.024-1.473 1.024h1.726"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.45 13.754h5.304c.964 0 1.746.783 1.746 1.748v5.068c0 .965-.782 1.748-1.746 1.748H37.45a1.747 1.747 0 0 1-1.746-1.748h0v-5.068c0-.966.782-1.748 1.746-1.748m1.94 6.618l-1.623-2.332m1.623 0l-1.623 2.332m-.317 5.31h5.304c.964 0 1.746.783 1.746 1.748v5.068c0 .966-.782 1.748-1.746 1.748H37.45a1.747 1.747 0 0 1-1.746-1.748V27.43c0-.965.782-1.748 1.746-1.748m.797 5.728h3.71m-3.71-2.89h3.71m-15.242-2.838h5.304c.965 0 1.746.783 1.746 1.748v5.068c0 .966-.781 1.748-1.746 1.748h-5.304a1.747 1.747 0 0 1-1.746-1.748V27.43c0-.965.782-1.748 1.746-1.748m.948 5.988l3.409-3.413"></svg:path><svg:path fill="currentColor" d="M28.71 28.52a.75.75 0 0 1-1.5 0a.75.75 0 0 1 1.5 0m2.815 2.89a.75.75 0 0 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class ArcticonsMathQuizGameIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
