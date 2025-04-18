import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPingPongIcon],svg[openmoji-ping-pong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#a57939" d="m14.084 33l31.461 16.869S36.917 53.5 26.25 48.75c0 0-8.917-5.417-12.166-15.75"></svg:path><svg:path fill="#ea5a47" d="M50.111 48.323a8 8 0 0 1-.376.316c-4.806 3.67-12.103 3.203-18.646 1.68l-.078-.009s-1.14-.187-1.625.898l-6.96-3.704a1.485 1.485 0 0 0-.114-1.793l-.036-.039c-7.274-6.678-10.967-14.912-5.736-24.8C22.638 9.347 34.492-.915 48.563 6.529c11.3 5.98 13.398 16.737 10.585 26.43c0 0-2.491 9.61-9.037 15.365"></svg:path><svg:path fill="none" d="m45.545 49.869l-31.092-16.45"></svg:path><svg:path fill="#a57939" d="m22.581 65.706l2.702-7.705l6.959-14.445l-5.046-2.375l-7.717 12.994s-3.039 4.719-3.974 7.089c-.464 1.176-.67.843-.435 1.921c.252 1.156 1.957 2.592 3.297 3.182c.883.492 2.468 1.025 3.634.13c.16-.123.504-.604.58-.79"></svg:path><svg:circle cx="54.822" cy="40.881" r="5" fill="#fff"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M29.386 51.208c.485-1.085 1.625-.897 1.625-.897l.078.009c6.72 1.564 13.048 1.247 18.032-2.468m-26.373-.67c.245-.93-.436-1.472-.436-1.472l-.036-.038c-7.274-6.679-10.968-14.912-5.736-24.8C22.638 9.346 34.492-.916 48.563 6.528c11.3 5.98 12.478 16.317 9.665 26.01M45.545 49.869L15.07 33.745"></svg:path><svg:path d="m22.602 65.816l10.36-22.604l-5.93-3.138S15.478 59.248 14.477 61.525a2.72 2.72 0 0 0 1.012 3.377c.67.438 1.514.925 2.486 1.348"></svg:path><svg:circle cx="54.822" cy="40.881" r="5"></svg:circle></svg:g>`,
})
export class OpenmojiPingPongIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
