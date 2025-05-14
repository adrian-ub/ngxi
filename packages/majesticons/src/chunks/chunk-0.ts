import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsAcademicCapIcon],svg[majesticons-academic-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M11.514 3.126a1 1 0 0 1 .972 0l9 5A1 1 0 0 1 22 9v7a1 1 0 1 1-2 0v-5.3l-1 .555v.004l-6.067 3.016a2 2 0 0 1-1.848-.035L2.357 9.479a1 1 0 0 0-.284-.103a1 1 0 0 1 .441-1.25l9-5zM5 13.199V17a1 1 0 0 0 .553.894l6 3a1 1 0 0 0 .894 0l6-3A1 1 0 0 0 19 17v-3.256l-6.083 2.844a2 2 0 0 1-1.805-.056L5 13.2z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsAcademicCapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAcademicCapLineIcon],svg[majesticons-academic-cap-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.486 5.414a1 1 0 0 0-.972 0L5.06 9l6.455 3.586a1 1 0 0 0 .972 0L18.94 9l-6.455-3.586zm-1.943-1.749a3 3 0 0 1 2.914 0l8.029 4.46a1 1 0 0 1 0 1.75l-8.03 4.46a3 3 0 0 1-2.913 0l-8.029-4.46a1 1 0 0 1 0-1.75l8.03-4.46z"></svg:path><svg:path d="M21 8a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zM6 10a1 1 0 0 1 1 1v5.382l4.553 2.276a1 1 0 0 0 .894 0L17 16.382V11a1 1 0 1 1 2 0v6a1 1 0 0 1-.553.894l-5.105 2.553a3 3 0 0 1-2.684 0l-5.105-2.553A1 1 0 0 1 5 17v-6a1 1 0 0 1 1-1z"></svg:path></svg:g>`,
})
export class MajesticonsAcademicCapLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAddColumnIcon],svg[majesticons-add-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h3M3 21h3m0 0h4a2 2 0 0 0 2-2V9M6 21V9m0-6h4a2 2 0 0 1 2 2v4M6 3v6M3 9h3m0 0h6m-9 6h9m3-3h3m0 0h3m-3 0v3m0-3V9"></svg:path>`,
})
export class MajesticonsAddColumnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAddColumnLineIcon],svg[majesticons-add-column-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h3M3 21h3m0 0h4a2 2 0 0 0 2-2V9M6 21V9m0-6h4a2 2 0 0 1 2 2v4M6 3v6M3 9h3m0 0h6m-9 6h9m3-3h3m0 0h3m-3 0v3m0-3V9"></svg:path>`,
})
export class MajesticonsAddColumnLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAddRowLineIcon],svg[majesticons-add-row-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3v3m18-3v3m0 0v4a2 2 0 0 1-2 2H9m12-6H9M3 6v4a2 2 0 0 0 2 2h4M3 6h6m0-3v3m0 0v6m6-9v9m-3 3v3m0 0v3m0-3h3m-3 0H9"></svg:path>`,
})
export class MajesticonsAddRowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAddRowIcon],svg[majesticons-add-row-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3v3m18-3v3m0 0v4a2 2 0 0 1-2 2H9m12-6H9M3 6v4a2 2 0 0 0 2 2h4M3 6h6m0-3v3m0 0v6m6-9v9m-3 3v3m0 0v3m0-3h3m-3 0H9"></svg:path>`,
})
export class MajesticonsAddRowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAdjustmentsLineIcon],svg[majesticons-adjustments-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2zM5 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0zm11 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0zm-5 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0z"></svg:path><svg:path d="M3 6a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm6 0a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1zm-6 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm14 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1zM3 18a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm6 0a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class MajesticonsAdjustmentsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAirplaneIcon],svg[majesticons-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.48 14h4.02a2.5 2.5 0 1 0 0-5H6.618a1 1 0 0 1-.894-.553l-.448-.894A1 1 0 0 0 4.382 7H2.517a1 1 0 0 0-.92 1.394l2.143 5a1 1 0 0 0 .92.606h3.863a1 1 0 0 1 .928 1.371L8.55 17.63A1 1 0 0 0 9.477 19h2.042a1 1 0 0 0 .781-.375l3.4-4.25a1 1 0 0 1 .78-.375M9.5 8h4.75L12.3 5.4a1 1 0 0 0-.8-.4H9.618a1 1 0 0 0-.894 1.447z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsAirplaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAdjustmentsIcon],svg[majesticons-adjustments-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M20 7a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20zm0 6a1 1 0 1 0 0-2h-1.17a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h9.17a3.001 3.001 0 0 0 5.66 0H20zm0 6a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsAdjustmentsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAirplaneFlight2LineIcon],svg[majesticons-airplane-flight-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#majesticonsAirplaneFlight2Line0)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.071 7.586l-.828.828A2 2 0 0 1 11.828 9h-1.414c-.375 0-.735.149-1 .414v0a1.414 1.414 0 0 0 0 2l1.829 1.829a2 2 0 0 0 2.828 0l1.414-1.415l.964 2.121a1.346 1.346 0 0 0 2.178.395v0c.252-.252.394-.595.394-.952v-4.27a2 2 0 0 1 .586-1.415l2.242-2.243c.472-.47 1.132-1.697 0-2.828s-2.357-.471-2.828 0l-1.768 1.768m-3.182 3.182l-2.02-.674a1.448 1.448 0 0 1-.566-2.397v0a1.45 1.45 0 0 1 1.12-.421l4.648.31m-3.182 3.182l3.182-3.182M2 14.905c.705-1.234 1.825-2.32 3-3.204M2 22.404c1.072-3.002 3.055-5.564 5.023-7.5m.477 6.5c.721-1.442 1.96-3.077 3.087-4.405"></svg:path></svg:g><svg:defs><svg:clippath id="majesticonsAirplaneFlight2Line0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class MajesticonsAirplaneFlight2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAirplaneFlight2Icon],svg[majesticons-airplane-flight-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#majesticonsAirplaneFlight20)"><svg:path fill="currentColor" d="M19.02 9.121v4.271a1.346 1.346 0 0 1-2.57.557l-.965-2.12l-1.414 1.414a2 2 0 0 1-2.828 0l-1.829-1.829a1.414 1.414 0 0 1 1-2.414h1.414a2 2 0 0 0 1.415-.586l.828-.828l-2.02-.674a1.448 1.448 0 0 1 .554-2.818l4.648.31l1.768-1.768c.471-.471 1.697-1.131 2.828 0c1.132 1.131.472 2.357 0 2.828l-2.242 2.243a2 2 0 0 0-.586 1.414z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 14.905c.705-1.234 1.825-2.32 3-3.204M2 22.404c1.072-3.002 3.055-5.564 5.023-7.5m.477 6.5c.721-1.442 1.96-3.077 3.087-4.405"></svg:path></svg:g><svg:defs><svg:clippath id="majesticonsAirplaneFlight20"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class MajesticonsAirplaneFlight2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAlertCircleIcon],svg[majesticons-alert-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m0 5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1m1 9a1 1 0 1 0-2 0a1 1 0 1 0 2 0" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsAlertCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAlertCircleLineIcon],svg[majesticons-alert-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M12 8v5m0 3"></svg:path></svg:g>`,
})
export class MajesticonsAlertCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAirplaneLineIcon],svg[majesticons-airplane-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9h5.5a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5h-4.02a1 1 0 0 0-.78.375l-3.4 4.25a1 1 0 0 1-.78.375H9.476a1 1 0 0 1-.928-1.371l.902-2.258A1 1 0 0 0 8.523 14H4.659a1 1 0 0 1-.919-.606l-2.143-5A1 1 0 0 1 2.517 7h1.865a1 1 0 0 1 .894.553l.448.894A1 1 0 0 0 6.618 9H10m5 0l-2.7-3.6a1 1 0 0 0-.8-.4H9.618a1 1 0 0 0-.894 1.447L10 9m5 0h-5"></svg:path>`,
})
export class MajesticonsAirplaneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAlignBottomIcon],svg[majesticons-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 20h18"></svg:path><svg:rect width="13" height="4" x="6" y="17" fill="currentColor" rx="2" transform="rotate(-90 6 17)"></svg:rect><svg:rect width="9" height="4" x="14" y="17" fill="currentColor" rx="2" transform="rotate(-90 14 17)"></svg:rect></svg:g>`,
})
export class MajesticonsAlignBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAlignBottomLineIcon],svg[majesticons-align-bottom-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 20h18"></svg:path><svg:rect width="13" height="4" x="6" y="17" rx="2" transform="rotate(-90 6 17)"></svg:rect><svg:rect width="9" height="4" x="14" y="17" rx="2" transform="rotate(-90 14 17)"></svg:rect></svg:g>`,
})
export class MajesticonsAlignBottomLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAlignHorizontalCenterIcon],svg[majesticons-align-horizontal-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 8a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H6a2 2 0 0 1-2-2m3 8a2 2 0 0 1 2-2h6a2 2 0 1 1 0 4H9a2 2 0 0 1-2-2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6H6a2 2 0 1 0 0 4h6m0-4h6a2 2 0 1 1 0 4h-6m0-4V3m0 7v4m0 0H9a2 2 0 1 0 0 4h3m0-4h3a2 2 0 1 1 0 4h-3m0 0v3"></svg:path></svg:g>`,
})
export class MajesticonsAlignHorizontalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAlignLeftIcon],svg[majesticons-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 3v18"></svg:path><svg:rect width="13" height="4" x="7" y="6" fill="currentColor" rx="2"></svg:rect><svg:rect width="9" height="4" x="7" y="14" fill="currentColor" rx="2"></svg:rect></svg:g>`,
})
export class MajesticonsAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAlignHorizontalCenterLineIcon],svg[majesticons-align-horizontal-center-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6H6a2 2 0 1 0 0 4h6m0-4h6a2 2 0 1 1 0 4h-6m0-4V3m0 7v4m0 0H9a2 2 0 1 0 0 4h3m0-4h3a2 2 0 1 1 0 4h-3m0 0v3"></svg:path>`,
})
export class MajesticonsAlignHorizontalCenterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAlignLeftLineIcon],svg[majesticons-align-left-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 3v18"></svg:path><svg:rect width="13" height="4" x="7" y="6" rx="2"></svg:rect><svg:rect width="9" height="4" x="7" y="14" rx="2"></svg:rect></svg:g>`,
})
export class MajesticonsAlignLeftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAlignRightIcon],svg[majesticons-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20 3v18"></svg:path><svg:rect width="13" height="4" x="4" y="6" fill="currentColor" rx="2"></svg:rect><svg:rect width="9" height="4" x="8" y="14" fill="currentColor" rx="2"></svg:rect></svg:g>`,
})
export class MajesticonsAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAlignRightLineIcon],svg[majesticons-align-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20 3v18"></svg:path><svg:rect width="13" height="4" x="4" y="6" rx="2"></svg:rect><svg:rect width="9" height="4" x="8" y="14" rx="2"></svg:rect></svg:g>`,
})
export class MajesticonsAlignRightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAlignTopIcon],svg[majesticons-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 4h18"></svg:path><svg:rect width="13" height="4" x="6" y="20" fill="currentColor" rx="2" transform="rotate(-90 6 20)"></svg:rect><svg:rect width="9" height="4" x="14" y="16" fill="currentColor" rx="2" transform="rotate(-90 14 16)"></svg:rect></svg:g>`,
})
export class MajesticonsAlignTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAlignTopLineIcon],svg[majesticons-align-top-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 4h18"></svg:path><svg:rect width="13" height="4" x="6" y="20" rx="2" transform="rotate(-90 6 20)"></svg:rect><svg:rect width="9" height="4" x="14" y="16" rx="2" transform="rotate(-90 14 16)"></svg:rect></svg:g>`,
})
export class MajesticonsAlignTopLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAlignVerticalCenterIcon],svg[majesticons-align-vertical-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M8 20a2 2 0 0 1-2-2V6a2 2 0 1 1 4 0v12a2 2 0 0 1-2 2m8-3a2 2 0 0 1-2-2V9a2 2 0 1 1 4 0v6a2 2 0 0 1-2 2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12v6a2 2 0 1 0 4 0v-6m-4 0V6a2 2 0 1 1 4 0v6m-4 0H3m7 0h4m0 0v3a2 2 0 1 0 4 0v-3m-4 0V9a2 2 0 1 1 4 0v3m0 0h3"></svg:path></svg:g>`,
})
export class MajesticonsAlignVerticalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAlignVerticalCenterLineIcon],svg[majesticons-align-vertical-center-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12v6a2 2 0 1 0 4 0v-6m-4 0V6a2 2 0 1 1 4 0v6m-4 0H3m7 0h4m0 0v3a2 2 0 1 0 4 0v-3m-4 0V9a2 2 0 1 1 4 0v3m0 0h3"></svg:path>`,
})
export class MajesticonsAlignVerticalCenterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAnalyticsIcon],svg[majesticons-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm10 2a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0zm-4 3a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0zm8 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsAnalyticsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAnalyticsDeleteIcon],svg[majesticons-analytics-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 5l2-2m-2 2l-2-2m2 2l2 2m-2-2l-2 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21 10.659A6 6 0 0 1 13.341 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3zM12 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1m-4 3a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m8 3a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsAnalyticsDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAnalyticsDeleteLineIcon],svg[majesticons-analytics-delete-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16v-5m4 5V8m4 8v-2M13 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7m-1-6l2-2m-2 2l-2-2m2 2l2 2m-2-2l-2 2"></svg:path>`,
})
export class MajesticonsAnalyticsDeleteLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAnalyticsLineIcon],svg[majesticons-analytics-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16v-5m4 5V8m4 8v-2m2-10H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class MajesticonsAnalyticsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAnalyticsPlusIcon],svg[majesticons-analytics-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 2v3m0 3V5m0 0h3m-3 0h-3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21 10.659A6 6 0 0 1 13.341 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3zM12 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1m-4 3a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m8 3a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsAnalyticsPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAnalyticsPlusLineIcon],svg[majesticons-analytics-plus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16v-5m4 5V8m4 8v-2M12 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6M19 2v3m0 3V5m0 0h3m-3 0h-3"></svg:path>`,
})
export class MajesticonsAnalyticsPlusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAnalyticsRestrictedIcon],svg[majesticons-analytics-restricted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.975 7.975a3.5 3.5 0 1 0-4.95-4.95m4.95 4.95a3.5 3.5 0 1 1-4.95-4.95m4.95 4.95L18.5 5.5l-2.475-2.475"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21 11.502a6.5 6.5 0 0 1-2.5.498A6.5 6.5 0 0 1 13 8.966V16a1 1 0 1 1-2 0V8a1 1 0 0 1 1.178-.984A6.5 6.5 0 0 1 12.498 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3zM8 10a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m8 3a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsAnalyticsRestrictedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAnalyticsRestrictedLineIcon],svg[majesticons-analytics-restricted-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 16v-5m4 5V8m4 8v-2M12 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"></svg:path><svg:path d="M20.975 7.975a3.5 3.5 0 1 0-4.95-4.95m4.95 4.95a3.5 3.5 0 1 1-4.95-4.95m4.95 4.95L18.5 5.5l-2.475-2.475"></svg:path></svg:g>`,
})
export class MajesticonsAnalyticsRestrictedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAnnotationIcon],svg[majesticons-annotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2.172a1 1 0 0 0-.707.293l-2 2a3 3 0 0 1-4.242 0l-2-2A1 1 0 0 0 7.172 18H5a3 3 0 0 1-3-3V6zm5 1a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2H7zm0 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H7z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsAnnotationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAnnotationLineIcon],svg[majesticons-annotation-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2.172a1 1 0 0 0-.707.293l-2 2a3 3 0 0 1-4.242 0l-2-2A1 1 0 0 0 7.172 18H5a3 3 0 0 1-3-3V6zm3-1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h2.172a3 3 0 0 1 2.12.879l2 2a1 1 0 0 0 1.415 0l2-2A3 3 0 0 1 16.828 16H19a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5zm1 3a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class MajesticonsAnnotationLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsApplicationsIcon],svg[majesticons-applications-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M6 3a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6zm0 10a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3H6zm10 0a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3h-2zm0-10a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsApplicationsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsApplicationsAddIcon],svg[majesticons-applications-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6zm0 10a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2zM13 6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V6zm5 8a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsApplicationsAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsApplicationsAddLineIcon],svg[majesticons-applications-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 3a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6zM5 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6zm1 7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3H6zm-1 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2zm8-10a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V6zm3-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2zm2 9a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2z"></svg:path></svg:g>`,
})
export class MajesticonsApplicationsAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsApplicationsLineIcon],svg[majesticons-applications-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 3a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6zM5 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6zm1 7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3H6zm-1 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2zm8 0a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-2zm3-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2zm0-12a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2zm-1 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V6z"></svg:path></svg:g>`,
})
export class MajesticonsApplicationsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArchiveIcon],svg[majesticons-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v1c0 .364-.097.706-.268 1H2.268A1.99 1.99 0 0 1 2 7V6zm1 4v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8H3zm7 2a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsArchiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArchiveLineIcon],svg[majesticons-archive-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 5a1 1 0 0 0-1 1v1h16V6a1 1 0 0 0-1-1H5zM2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v1a2 2 0 0 1-1 1.732V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8.732A2 2 0 0 1 2 7V6zm3 3v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9H5zm4 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class MajesticonsArchiveLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowCircleDownIcon],svg[majesticons-arrow-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm10.707 3.707l3-3a1 1 0 0 0-1.414-1.414L13 12.586V9a1 1 0 1 0-2 0v3.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsArrowCircleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowCircleDownLineIcon],svg[majesticons-arrow-circle-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm.707 13.707l3-3a1 1 0 0 0-1.414-1.414L13 12.586V9a1 1 0 1 0-2 0v3.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0z"></svg:path></svg:g>`,
})
export class MajesticonsArrowCircleDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowCircleLeftIcon],svg[majesticons-arrow-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm6.293-.707l3-3a1 1 0 1 1 1.414 1.414L11.414 11H15a1 1 0 1 1 0 2h-3.586l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsArrowCircleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowCircleLeftLineIcon],svg[majesticons-arrow-circle-left-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm-3.707 9.293l3-3a1 1 0 1 1 1.414 1.414L11.414 11H15a1 1 0 1 1 0 2h-3.586l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414z"></svg:path></svg:g>`,
})
export class MajesticonsArrowCircleLeftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowCircleRightIcon],svg[majesticons-arrow-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm13.707-.707l-3-3a1 1 0 1 0-1.414 1.414L12.586 11H9a1 1 0 1 0 0 2h3.586l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsArrowCircleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowCircleRightLineIcon],svg[majesticons-arrow-circle-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm3.707 9.293l-3-3a1 1 0 1 0-1.414 1.414L12.586 11H9a1 1 0 1 0 0 2h3.586l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414z"></svg:path></svg:g>`,
})
export class MajesticonsArrowCircleRightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowCircleUpIcon],svg[majesticons-arrow-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm9.293-3.707l-3 3a1 1 0 1 0 1.414 1.414L11 11.414V15a1 1 0 1 0 2 0v-3.586l1.293 1.293a1 1 0 0 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsArrowCircleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowCircleUpLineIcon],svg[majesticons-arrow-circle-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm-.707 6.293l-3 3a1 1 0 1 0 1.414 1.414L11 11.414V15a1 1 0 1 0 2 0v-3.586l1.293 1.293a1 1 0 0 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0z"></svg:path></svg:g>`,
})
export class MajesticonsArrowCircleUpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowDownIcon],svg[majesticons-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 19l6-6m-6 6l-6-6m6 6V5"></svg:path>`,
})
export class MajesticonsArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowDownCircleIcon],svg[majesticons-arrow-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m.707-12.707l3 3a1 1 0 0 1-1.414 1.414L13 11.414V15a1 1 0 1 1-2 0v-3.586l-1.293 1.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsArrowDownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowDownCircleLineIcon],svg[majesticons-arrow-down-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M12 15V9m0 0l3 3m-3-3l-3 3"></svg:path></svg:g>`,
})
export class MajesticonsArrowDownCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowDownLineIcon],svg[majesticons-arrow-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 19l6-6m-6 6l-6-6m6 6V5"></svg:path>`,
})
export class MajesticonsArrowDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowLeftIcon],svg[majesticons-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12l6-6m-6 6l6 6m-6-6h14"></svg:path>`,
})
export class MajesticonsArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowLeftCircleIcon],svg[majesticons-arrow-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m.707-5.293l3-3a1 1 0 0 0-1.414-1.414L13 12.586V9a1 1 0 1 0-2 0v3.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsArrowLeftCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowLeftCircleLineIcon],svg[majesticons-arrow-left-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M12 9v6m0 0l3-3m-3 3l-3-3"></svg:path></svg:g>`,
})
export class MajesticonsArrowLeftCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowLeftLineIcon],svg[majesticons-arrow-left-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12l6-6m-6 6l6 6m-6-6h14"></svg:path>`,
})
export class MajesticonsArrowLeftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowRightIcon],svg[majesticons-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 12l-6-6m6 6l-6 6m6-6H5"></svg:path>`,
})
export class MajesticonsArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowRightCircleIcon],svg[majesticons-arrow-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.707-12.707a1 1 0 0 1 1.414 1.415L11.414 11H15a1 1 0 1 1 0 2h-3.585l1.292 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.415l3-3z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsArrowRightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowRightCircleLineIcon],svg[majesticons-arrow-right-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M15 12H9m0 0l3-3m-3 3l3 3"></svg:path></svg:g>`,
})
export class MajesticonsArrowRightCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowRightLineIcon],svg[majesticons-arrow-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 12l-6-6m6 6l-6 6m6-6H5"></svg:path>`,
})
export class MajesticonsArrowRightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowUpIcon],svg[majesticons-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 5l6 6m-6-6l-6 6m6-6v14"></svg:path>`,
})
export class MajesticonsArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowUpCircleIcon],svg[majesticons-arrow-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m.707-5.293a1 1 0 0 1-1.415-1.414L12.585 13H9a1 1 0 1 1 0-2h3.586l-1.293-1.293a1 1 0 0 1 1.415-1.414l3 3a1 1 0 0 1 0 1.414l-3 3z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsArrowUpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowUpCircleLineIcon],svg[majesticons-arrow-up-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M9 12h6m0 0l-3 3m3-3l-3-3"></svg:path></svg:g>`,
})
export class MajesticonsArrowUpCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowUpLineIcon],svg[majesticons-arrow-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 5l6 6m-6-6l-6 6m6-6v14"></svg:path>`,
})
export class MajesticonsArrowUpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowsCollapseFullIcon],svg[majesticons-arrows-collapse-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 15h-4m0 0v4m0-4l4 4M5 9h4m0 0V5m0 4L5 5m14 4h-4m0 0V5m0 4l4-4M5 15h4m0 0v4m0-4l-4 4"></svg:path>`,
})
export class MajesticonsArrowsCollapseFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowsCollapseFullLineIcon],svg[majesticons-arrows-collapse-full-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 15h-4m0 0v4m0-4l4 4M5 9h4m0 0V5m0 4L5 5m14 4h-4m0 0V5m0 4l4-4M5 15h4m0 0v4m0-4l-4 4"></svg:path>`,
})
export class MajesticonsArrowsCollapseFullLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowsExpandIcon],svg[majesticons-arrows-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M8 3a1 1 0 0 1 .707 1.707L7.414 6l2.293 2.293a1 1 0 0 1-1.414 1.414L6 7.414L4.707 8.707A1 1 0 0 1 3 8V4a1 1 0 0 1 1-1h4zm6.293 12.707a1 1 0 0 1 1.414-1.414L18 16.586l1.293-1.293A1 1 0 0 1 21 16v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-.707-1.707L16.586 18l-2.293-2.293zM8 21a1 1 0 0 0 .707-1.707L7.414 18l2.293-2.293a1 1 0 0 0-1.414-1.414L6 16.586l-1.293-1.293A1 1 0 0 0 3 16v4a1 1 0 0 0 1 1h4zm6.293-12.707a1 1 0 0 0 1.414 1.414L18 7.414l1.293 1.293A1 1 0 0 0 21 8V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-.707 1.707L16.586 6l-2.293 2.293z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsArrowsExpandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowsExpandFullIcon],svg[majesticons-arrows-expand-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19h4m0 0v-4m0 4l-4-4M9 5H5m0 0v4m0-4l4 4m6-4h4m0 0v4m0-4l-4 4M9 19H5m0 0v-4m0 4l4-4"></svg:path>`,
})
export class MajesticonsArrowsExpandFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowsExpandFullLineIcon],svg[majesticons-arrows-expand-full-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19h4m0 0v-4m0 4l-4-4M9 5H5m0 0v4m0-4l4 4m6-4h4m0 0v4m0-4l-4 4M9 19H5m0 0v-4m0 4l4-4"></svg:path>`,
})
export class MajesticonsArrowsExpandFullLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArrowsExpandLineIcon],svg[majesticons-arrows-expand-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 4a1 1 0 0 1-1 1H6.414l3.293 3.293a1 1 0 0 1-1.414 1.414L5 6.414V8a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zm8.586 15l-3.293-3.293a1 1 0 0 1 1.414-1.414L19 17.586V16a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h1.586zM9 20a1 1 0 0 0-1-1H6.414l3.293-3.293a1 1 0 0 0-1.414-1.414L5 17.586V16a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1zm8.586-15l-3.293 3.293a1 1 0 0 0 1.414 1.414L19 6.414V8a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-4a1 1 0 1 0 0 2h1.586z"></svg:path></svg:g>`,
})
export class MajesticonsArrowsExpandLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArticleIcon],svg[majesticons-article-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm5 1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm1 4V9h2v2zm7-4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-8 4a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsArticleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArticleLineIcon],svg[majesticons-article-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8h2m-2 4h2m0 4H7m0-8v4h4V8zM5 20h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2"></svg:path>`,
})
export class MajesticonsArticleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArticleSearchIcon],svg[majesticons-article-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h8.257a5.48 5.48 0 0 1-1.235-4H7a1 1 0 1 1 0-2h5.6a5.5 5.5 0 0 1 1.92-2.123A1 1 0 0 1 15 11h2a1 1 0 0 1 1 1.022a5.5 5.5 0 0 1 4 2.315V6a3 3 0 0 0-3-3zm1 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm2 1v2h2V9zm6-1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsArticleSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsArticleSearchLineIcon],svg[majesticons-article-search-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 8h2m-2 4h2m-5 4H7m14-4V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7M7 8v4h4V8z"></svg:path><svg:path d="M19.268 19.268a2.5 2.5 0 1 0-3.536-3.536a2.5 2.5 0 0 0 3.536 3.536m0 0L21 21"></svg:path></svg:g>`,
})
export class MajesticonsArticleSearchLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAtSymbolIcon],svg[majesticons-at-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11zM4.788 6.416C6.174 4.492 8.474 3 12 3s5.826 1.492 7.212 3.416C20.56 8.289 21 10.506 21 12c0 .631-.152 1.603-.743 2.448C19.625 15.351 18.563 16 17 16c-1.037 0-1.74-.531-2.186-1.157A4 4 0 1 1 16 12c0 .403.086.993.302 1.442c.204.427.423.558.698.558c.937 0 1.375-.351 1.618-.698c.284-.405.382-.933.382-1.302c0-1.173-.36-2.956-1.412-4.416C16.575 6.175 14.874 5 12 5S7.426 6.175 6.412 7.584C5.36 9.044 5 10.827 5 12c0 1.173.36 2.956 1.412 4.416C7.426 17.825 9.126 19 12 19c1.98 0 3.385-.558 4.388-1.334a1 1 0 1 1 1.224 1.581C16.229 20.317 14.385 21 12 21c-3.526 0-5.826-1.491-7.212-3.416C3.44 15.711 3 13.494 3 12c0-1.493.44-3.711 1.788-5.584zM12 10a2 2 0 1 1 0 4a2 2 0 0 1 0-4z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsAtSymbolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAtSymbolLineIcon],svg[majesticons-at-symbol-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.412 7.584C5.36 9.044 5 10.827 5 12c0 1.173.36 2.956 1.412 4.416C7.426 17.825 9.126 19 12 19c1.98 0 3.385-.558 4.388-1.334a1 1 0 1 1 1.224 1.581C16.229 20.317 14.385 21 12 21c-3.526 0-5.826-1.491-7.212-3.416C3.44 15.711 3 13.494 3 12c0-1.493.44-3.711 1.788-5.584C6.174 4.492 8.474 3 12 3s5.826 1.492 7.212 3.416C20.56 8.289 21 10.506 21 12a3.79 3.79 0 0 1-.689 2.147c-.56.778-1.485 1.353-2.811 1.353c-1.326 0-2.251-.575-2.812-1.353A3.791 3.791 0 0 1 14 12a1 1 0 1 1 2 0c0 .257.085.664.311.978c.19.264.515.522 1.189.522s.999-.258 1.189-.522c.226-.314.311-.721.311-.978c0-1.173-.36-2.956-1.412-4.416C16.575 6.175 14.874 5 12 5S7.426 6.175 6.412 7.584z"></svg:path><svg:path d="M12 10a2 2 0 1 0 0 4a2 2 0 0 0 0-4zm-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0z"></svg:path></svg:g>`,
})
export class MajesticonsAtSymbolLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAtom2Icon],svg[majesticons-atom-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18.893 7.936a8.003 8.003 0 0 1-7.774 12.016m-6.012-3.888a8.003 8.003 0 0 1 7.774-12.016"></svg:path><svg:circle cx="17.657" cy="6.343" r="2" fill="currentColor" transform="rotate(45 17.657 6.343)"></svg:circle><svg:circle cx="6.343" cy="17.657" r="2" fill="currentColor" transform="rotate(45 6.343 17.657)"></svg:circle><svg:circle cx="12" cy="12" r="2" fill="currentColor" transform="rotate(45 12 12)"></svg:circle></svg:g>`,
})
export class MajesticonsAtom2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAtom2LineIcon],svg[majesticons-atom-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18.893 7.936a8.003 8.003 0 0 1-7.774 12.016m-6.012-3.888a8.003 8.003 0 0 1 7.774-12.016"></svg:path><svg:circle cx="17.657" cy="6.343" r="2" transform="rotate(45 17.657 6.343)"></svg:circle><svg:circle cx="6.343" cy="17.657" r="2" transform="rotate(45 6.343 17.657)"></svg:circle><svg:circle cx="12" cy="12" r="2" transform="rotate(45 12 12)"></svg:circle></svg:g>`,
})
export class MajesticonsAtom2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAttachmentIcon],svg[majesticons-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v5a2 2 0 0 0 2 2v0a2 2 0 0 0 2-2V7a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v8a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V5"></svg:path>`,
})
export class MajesticonsAttachmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAttachmentLineIcon],svg[majesticons-attachment-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v5a2 2 0 0 0 2 2v0a2 2 0 0 0 2-2V7a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v8a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V5"></svg:path>`,
})
export class MajesticonsAttachmentLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAwardIcon],svg[majesticons-award-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="9" r="7"></svg:circle><svg:path fill="currentColor" d="M7 20.234V14c.667.667 2.6 2 5 2s4.333-1.333 5-2v6.234a1 1 0 0 1-1.514.857l-2.972-1.782a1 1 0 0 0-1.028 0L8.514 21.09A1 1 0 0 1 7 20.234"></svg:path></svg:g>`,
})
export class MajesticonsAwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsAwardLineIcon],svg[majesticons-award-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="9" r="7"></svg:circle><svg:path d="M7 14v6.234a1 1 0 0 0 1.514.857l2.972-1.782a1 1 0 0 1 1.028 0l2.972 1.782A1 1 0 0 0 17 20.234V14"></svg:path></svg:g>`,
})
export class MajesticonsAwardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBackCircleIcon],svg[majesticons-back-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11s11-4.925 11-11m-7.496-4.868A1 1 0 0 1 17 8v8a1 1 0 0 1-1.496.868L9 13.152V16a1 1 0 1 1-2 0V8a1 1 0 1 1 2 0v2.848zM15 9.723L11.016 12L15 14.277z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsBackCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBackCircleLineIcon],svg[majesticons-back-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 8v8m8-8v8l-7-4z"></svg:path><svg:circle r="10" transform="matrix(-1 0 0 1 12 12)"></svg:circle></svg:g>`,
})
export class MajesticonsBackCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBackspaceIcon],svg[majesticons-backspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M22 8a3 3 0 0 0-3-3H8.828a3 3 0 0 0-2.12.879l-4 4a3 3 0 0 0 0 4.242l4 4a3 3 0 0 0 2.12.879H19a3 3 0 0 0 3-3V8zm-6.707 1.293a1 1 0 1 1 1.414 1.414L15.414 12l1.293 1.293a1 1 0 0 1-1.414 1.414L14 13.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L12.586 12l-1.293-1.293a1 1 0 0 1 1.414-1.414L14 10.586l1.293-1.293z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsBackspaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBackspaceLineIcon],svg[majesticons-backspace-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19 7a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.828a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 0-1.414l4-4A1 1 0 0 1 8.828 7H19zm3 1a3 3 0 0 0-3-3H8.828a3 3 0 0 0-2.12.879l-4 4a3 3 0 0 0 0 4.242l4 4a3 3 0 0 0 2.12.879H19a3 3 0 0 0 3-3V8zm-5.293 1.293a1 1 0 0 0-1.414 0L14 10.586l-1.293-1.293a1 1 0 1 0-1.414 1.414L12.586 12l-1.293 1.293a1 1 0 0 0 1.414 1.414L14 13.414l1.293 1.293a1 1 0 0 0 1.414-1.414L15.414 12l1.293-1.293a1 1 0 0 0 0-1.414z"></svg:path></svg:g>`,
})
export class MajesticonsBackspaceLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBackwardCircleIcon],svg[majesticons-backward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1m5.493 7.13a1 1 0 0 0-1.008.013L12 10.833V9a1 1 0 0 0-1.514-.857l-5 3a1 1 0 0 0 0 1.714l5 3A1 1 0 0 0 12 15v-1.834l4.485 2.691A1 1 0 0 0 18 15V9a1 1 0 0 0-.507-.87M16 13.234L13.944 12L16 10.766zM7.944 12L10 13.234v-2.468z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsBackwardCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBackwardCircleLineIcon],svg[majesticons-backward-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle r="10" transform="matrix(-1 0 0 1 12 12)"></svg:circle><svg:path d="M17 15V9l-5 3zm-6 0V9l-5 3z"></svg:path></svg:g>`,
})
export class MajesticonsBackwardCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBackwardStartCircleIcon],svg[majesticons-backward-start-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1m5.493 7.13a1 1 0 0 0-1.008.013L13 10.233V9a1 1 0 0 0-1.514-.857L8 10.233V9a1 1 0 0 0-2 0v6a1 1 0 1 0 2 0v-1.234l3.486 2.091A1 1 0 0 0 13 15v-1.234l3.485 2.091A1 1 0 0 0 18 15V9a1 1 0 0 0-.507-.87M11 12v-1.234L8.944 12L11 13.234zm5 1.234L13.944 12L16 10.766z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsBackwardStartCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBackwardStartCircleLineIcon],svg[majesticons-backward-start-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle r="10" transform="matrix(-1 0 0 1 12 12)"></svg:circle><svg:path d="M17 15V9l-5 3zM7 12l5 3V9zm0 0V9m0 3v3"></svg:path></svg:g>`,
})
export class MajesticonsBackwardStartCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBadgeCheckIcon],svg[majesticons-badge-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M10.054 2.344a3 3 0 0 1 3.892 0l1.271 1.084a1 1 0 0 0 .57.236l1.665.133a3 3 0 0 1 2.751 2.751l.133 1.666a1 1 0 0 0 .236.569l1.084 1.271a3 3 0 0 1 0 3.892l-1.084 1.271a1 1 0 0 0-.236.57l-.133 1.665a3 3 0 0 1-2.751 2.751l-1.666.133a1 1 0 0 0-.569.236l-1.271 1.084a3 3 0 0 1-3.892 0l-1.271-1.084a1 1 0 0 0-.57-.236l-1.665-.133a3 3 0 0 1-2.751-2.751l-.133-1.666a1 1 0 0 0-.236-.569l-1.084-1.271a3 3 0 0 1 0-3.892l1.084-1.271a1 1 0 0 0 .236-.57l.133-1.665a3 3 0 0 1 2.751-2.751l1.666-.133a1 1 0 0 0 .569-.236l1.271-1.084zm5.653 8.363a1 1 0 0 0-1.414-1.414L11 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsBadgeCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBadgeCheckLineIcon],svg[majesticons-badge-check-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.946 2.344a3 3 0 0 0-3.892 0L8.783 3.428a1 1 0 0 1-.57.236l-1.665.132a3 3 0 0 0-2.751 2.752l-.133 1.666a1 1 0 0 1-.236.569l-1.084 1.271a3 3 0 0 0 0 3.892l1.084 1.271a1 1 0 0 1 .236.57l.133 1.665a3 3 0 0 0 2.751 2.751l1.666.133c.21.017.409.1.569.236l1.271 1.084a3 3 0 0 0 3.892 0l1.271-1.084c.16-.136.36-.219.57-.236l1.665-.133a3 3 0 0 0 2.751-2.751l.133-1.666a1 1 0 0 1 .236-.569l1.084-1.271a3 3 0 0 0 0-3.892l-1.084-1.271a1 1 0 0 1-.236-.57l-.133-1.665a3 3 0 0 0-2.751-2.752l-1.666-.132a1 1 0 0 1-.569-.236l-1.271-1.084zM11.35 3.867a1 1 0 0 1 1.298 0L13.92 4.95a3 3 0 0 0 1.707.707l1.665.133a1 1 0 0 1 .918.917l.133 1.666a3 3 0 0 0 .707 1.707l1.083 1.271a1 1 0 0 1 0 1.298L19.05 13.92a3 3 0 0 0-.707 1.707l-.133 1.665a1 1 0 0 1-.918.918l-1.665.133a3 3 0 0 0-1.707.707l-1.271 1.083a1 1 0 0 1-1.298 0L10.08 19.05a3 3 0 0 0-1.707-.707l-1.666-.133a1 1 0 0 1-.917-.918l-.133-1.665a3 3 0 0 0-.707-1.707l-1.083-1.271a1 1 0 0 1 0-1.298L4.95 10.08a3 3 0 0 0 .707-1.707l.133-1.666a1 1 0 0 1 .917-.917l1.666-.133a3 3 0 0 0 1.707-.707l1.271-1.083zm4.356 6.84a1 1 0 0 0-1.414-1.414L11 12.586l-1.293-1.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4z"></svg:path></svg:g>`,
})
export class MajesticonsBadgeCheckLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBanIcon],svg[majesticons-ban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm6 10c0 1.296-.41 2.496-1.11 3.476L8.524 7.11A6 6 0 0 1 18 12zM6 12c0-1.296.41-2.496 1.11-3.477l8.366 8.368A6 6 0 0 1 6 12z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsBanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBanLineIcon],svg[majesticons-ban-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.094 5.68L18.32 16.906A8 8 0 0 0 7.094 5.68zm9.812 12.64L5.68 7.094A8 8 0 0 0 16.906 18.32zM4.929 4.929A9.972 9.972 0 0 1 12 2c5.523 0 10 4.477 10 10a9.972 9.972 0 0 1-2.929 7.071A9.972 9.972 0 0 1 12 22C6.477 22 2 17.523 2 12a9.972 9.972 0 0 1 2.929-7.071z"></svg:path></svg:g>`,
})
export class MajesticonsBanLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBandAidsIcon],svg[majesticons-band-aids-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="9" height="19" x="2" y="8.364" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" rx="4.5" transform="rotate(-45 2 8.364)"></svg:rect><svg:path fill="currentColor" d="m11.546 18.617l.354-.353L5.535 11.9l-.354.353a4.5 4.5 0 0 0 6.364 6.364zm.707-13.435l-.354.354l6.365 6.364l.353-.354a4.5 4.5 0 1 0-6.364-6.364"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11.546 18.617l.354-.353L5.535 11.9l-.354.353a4.5 4.5 0 0 0 6.364 6.364zm.707-13.435l-.354.354l6.365 6.364l.353-.354a4.5 4.5 0 1 0-6.364-6.364m-.353 8.839"></svg:path></svg:g>`,
})
export class MajesticonsBandAidsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBandAidsLineIcon],svg[majesticons-band-aids-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="9" height="19" x="2" y="8.364" rx="4.5" transform="rotate(-45 2 8.364)"></svg:rect><svg:path d="m11.9 18.264l-.354.353a4.5 4.5 0 0 1-6.364 0v0a4.5 4.5 0 0 1 0-6.364l.354-.353M11.9 5.536l.353-.354a4.5 4.5 0 0 1 6.364 0v0a4.5 4.5 0 0 1 0 6.364l-.354.354M11.9 14.021"></svg:path></svg:g>`,
})
export class MajesticonsBandAidsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBarcode2Icon],svg[majesticons-barcode-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6v12m7-12v12m7-12v12M10 6.5v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m7 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0M3.5 6a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5v0a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5"></svg:path>`,
})
export class MajesticonsBarcode2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBarcode2LineIcon],svg[majesticons-barcode-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6v12m7-12v12m7-12v12M10 6.5v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m7 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0M3.5 6a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5v0a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5"></svg:path>`,
})
export class MajesticonsBarcode2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBasket2Icon],svg[majesticons-basket-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.612 6.084C9.16 6.711 9 7.494 9 8v1h6V8c0-.507-.16-1.289-.611-1.916C13.974 5.508 13.274 5 12 5s-1.974.508-2.388 1.084M17 9V8c0-.827-.24-2.044-.988-3.084C15.226 3.825 13.926 3 12 3s-3.226.825-4.012 1.916C7.24 5.956 7 7.173 7 8v1H3a1 1 0 0 0 0 2h.095l.91 9.1A1 1 0 0 0 5 21h14a1 1 0 0 0 .995-.9l.91-9.1H21a1 1 0 1 0 0-2zm-8 5a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm4 0a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm4 0a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsBasket2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBasket2LineIcon],svg[majesticons-basket-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h1m17 0h-1m0 0l-1 10H5L4 10m16 0h-4M4 10h4m4 4v2m3-2v2m-6-2v2m-1-6h8m-8 0V8c0-1.333.8-4 4-4s4 2.667 4 4v2"></svg:path>`,
})
export class MajesticonsBasket2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBathShowerIcon],svg[majesticons-bath-shower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M20 14v-2H4v2c0 1.138.583 3.248 2.745 3.841c.37.102.787.159 1.255.159h8a4.7 4.7 0 0 0 1.255-.159C19.417 17.248 20 15.138 20 14"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h1m16 0a1 1 0 0 0 1-1V7c0-1-.6-3-3-3s-3 2-3 3m5 5v2c0 1.138-.583 3.248-2.745 3.841M20 12H4m0 0v2c0 1.138.583 3.248 2.745 3.841M6 20l.745-2.159m0 0c.37.102.787.159 1.255.159h8a4.7 4.7 0 0 0 1.255-.159M18 20l-.745-2.159M15 7h-2m2 0h2"></svg:path></svg:g>`,
})
export class MajesticonsBathShowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBathShowerLineIcon],svg[majesticons-bath-shower-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h1m16 0a1 1 0 0 0 1-1V7c0-1-.6-3-3-3s-3 2-3 3m5 5v2c0 1.138-.583 3.248-2.745 3.841M20 12H4m0 0v2c0 1.138.583 3.248 2.745 3.841M6 20l.745-2.159m0 0c.37.102.787.159 1.255.159h8a4.7 4.7 0 0 0 1.255-.159M18 20l-.745-2.159M15 7h-2m2 0h2"></svg:path>`,
})
export class MajesticonsBathShowerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBatteryIcon],svg[majesticons-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M16 6H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m6 7v-2a1 1 0 0 0-1-1v4a1 1 0 0 0 1-1"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 6H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m6 7v-2a1 1 0 0 0-1-1v4a1 1 0 0 0 1-1"></svg:path></svg:g>`,
})
export class MajesticonsBatteryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBatteryFullIcon],svg[majesticons-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm19 2a1 1 0 0 1 1-1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2a1 1 0 0 1-1-1zM7 10a1 1 0 0 0-2 0v4a1 1 0 1 0 2 0zm3-1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m5 1a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsBatteryFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBatteryFullLineIcon],svg[majesticons-battery-full-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10v4m4 0v-4m4 0v4m4-4V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2m0-4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2v0m0-4v4"></svg:path>`,
})
export class MajesticonsBatteryFullLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBatteryHalfIcon],svg[majesticons-battery-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm17 4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2M6 9a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m5 1a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsBatteryHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBatteryHalfLineIcon],svg[majesticons-battery-half-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10v4m4 0v-4m8 0V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2m0-4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2v0m0-4v4"></svg:path>`,
})
export class MajesticonsBatteryHalfLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBatteryLineIcon],svg[majesticons-battery-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 10V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2m0-4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2v0m0-4v4"></svg:path>`,
})
export class MajesticonsBatteryLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBatteryLowIcon],svg[majesticons-battery-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm19 2a1 1 0 0 1 1-1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2a1 1 0 0 1-1-1zM7 10a1 1 0 0 0-2 0v4a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsBatteryLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBatteryLowLineIcon],svg[majesticons-battery-low-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10v4m12-4V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2m0-4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2v0m0-4v4"></svg:path>`,
})
export class MajesticonsBatteryLowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBeachIcon],svg[majesticons-beach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M10 5.196c1.5-2.598 5.098-2.83 7.696-1.33s4.196 4.732 2.696 7.33l-3.464-2l-1.732-1l-1.732-1z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.696 3.866C15.098 2.366 11.5 2.598 10 5.196l3.464 2m4.232-3.33c2.598 1.5 4.196 4.732 2.696 7.33l-5.196-3m2.5-4.33l.5-.866m-.5.866c-1.821.488-2.982 1.165-4.232 3.33m4.232-3.33c.488 1.821.482 3.165-.768 5.33m-1.732-1l-1.732-1m1.732 1l-3 5.196M3 21l.88-1.056a2 2 0 0 1 3.139.08v0a2 2 0 0 0 3.107.118l.19-.218a2.236 2.236 0 0 1 3.367 0l.191.218c.838.957 2.344.9 3.107-.117v0a2 2 0 0 1 3.14-.08L21 21M6.708 16A7.97 7.97 0 0 1 12 14a7.97 7.97 0 0 1 5.292 2"></svg:path></svg:g>`,
})
export class MajesticonsBeachIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBeachLineIcon],svg[majesticons-beach-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.696 3.866C15.098 2.366 11.5 2.598 10 5.196l3.464 2m4.232-3.33c2.598 1.5 4.196 4.732 2.696 7.33l-5.196-3m2.5-4.33l.5-.866m-.5.866c-1.821.488-2.982 1.165-4.232 3.33m4.232-3.33c.488 1.821.482 3.165-.768 5.33m-1.732-1l-1.732-1m1.732 1l-3 5.196M3 21l.88-1.056a2 2 0 0 1 3.139.08v0a2 2 0 0 0 3.107.118l.19-.218a2.236 2.236 0 0 1 3.367 0l.191.218c.838.957 2.344.9 3.107-.117v0a2 2 0 0 1 3.14-.08L21 21M6.708 16A7.97 7.97 0 0 1 12 14a7.97 7.97 0 0 1 5.292 2"></svg:path>`,
})
export class MajesticonsBeachLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBeakerIcon],svg[majesticons-beaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M8 3a1 1 0 0 0 0 2v5.62l-4.789 5.387C1.491 17.942 2.865 21 5.454 21h13.092c2.589 0 3.962-3.058 2.242-4.993L16 10.62V5a1 1 0 1 0 0-2H8z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsBeakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBeakerLineIcon],svg[majesticons-beaker-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2v5.62l4.788 5.387c1.72 1.935.347 4.993-2.242 4.993H5.454c-2.589 0-3.962-3.058-2.243-4.993L8 10.62V5a1 1 0 0 1-1-1zm3 1v6a1 1 0 0 1-.253.664l-5.04 5.672C4.132 17.98 4.59 19 5.453 19h13.092c.863 0 1.321-1.02.748-1.664l-5.041-5.672A1 1 0 0 1 14 11V5h-4z"></svg:path></svg:g>`,
})
export class MajesticonsBeakerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBellIcon],svg[majesticons-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M6 11c0-4.8 4-6 6-6c4.8 0 6 4 6 6v4l2 2H4l2-2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5c-2 0-6 1.2-6 6v4l-2 2h16l-2-2v-4c0-2-1.2-6-6-6m0 0V3M9 18c0 1 .6 3 3 3s3-2 3-3"></svg:path></svg:g>`,
})
export class MajesticonsBellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBellLineIcon],svg[majesticons-bell-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5c-2 0-6 1.2-6 6v4l-2 2h5m3-12c4.8 0 6 4 6 6v4l2 2h-5M12 5V3M9 17v1c0 1 .6 3 3 3s3-2 3-3v-1m-6 0h6"></svg:path>`,
})
export class MajesticonsBellLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBitcoinCircleIcon],svg[majesticons-bitcoin-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m10-6a1 1 0 1 0-2 0v1H8a1 1 0 0 0 0 2h1v6H8a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1v1a1 1 0 1 0 2 0v-1c.493 0 1.211-.14 1.834-.588C16.51 15.925 17 15.126 17 14c0-.851-.281-1.516-.71-2c.429-.484.71-1.149.71-2c0-1.126-.491-1.926-1.166-2.412A3.23 3.23 0 0 0 14 7V6a1 1 0 1 0-2 0v1h-1zm0 5V9h3c.173 0 .456.06.666.212c.159.114.334.314.334.788s-.175.674-.334.789A1.25 1.25 0 0 1 14 11zm0 2h3c.173 0 .456.06.666.211c.159.115.334.315.334.789s-.175.674-.334.789A1.25 1.25 0 0 1 14 15h-3z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsBitcoinCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBitcoinCircleLineIcon],svg[majesticons-bitcoin-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M8 8h5m1 4c.667 0 2-.4 2-2s-1.333-2-2-2h-1m1 4c.667 0 2 .4 2 2s-1.333 2-2 2h-1m1-4h-4m-2 4h5M10 6v6m0 6v-6m3-6v2m0 8v2"></svg:path></svg:g>`,
})
export class MajesticonsBitcoinCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBluetoothIcon],svg[majesticons-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 12l5-4l-5-4zm0 0l5 4l-5 4zm0 0L7 8m5 4l-5 4"></svg:path>`,
})
export class MajesticonsBluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBluetoothLineIcon],svg[majesticons-bluetooth-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 12l5-4l-5-4zm0 0l5 4l-5 4zm0 0L7 8m5 4l-5 4"></svg:path>`,
})
export class MajesticonsBluetoothLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBoldIcon],svg[majesticons-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 6H6v6h7a3 3 0 1 0 0-6m2 6H6v6h9a3 3 0 1 0 0-6"></svg:path>`,
})
export class MajesticonsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBoldLineIcon],svg[majesticons-bold-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 6H6v6h7a3 3 0 1 0 0-6m2 6H6v6h9a3 3 0 1 0 0-6"></svg:path>`,
})
export class MajesticonsBoldLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBookIcon],svg[majesticons-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm5 0v7l2.293-2.293a1 1 0 0 1 1.414 0L14 12V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBookLineIcon],svg[majesticons-book-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4M8 3v9l3-3l3 3V3M8 3h6"></svg:path>`,
})
export class MajesticonsBookLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBookMinusIcon],svg[majesticons-book-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 19h-6"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h7.803A6 6 0 0 1 21 13.341V5a3 3 0 0 0-3-3zm2 10V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7l-2.293-2.293a1 1 0 0 0-1.414 0z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsBookMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBookMinusLineIcon],svg[majesticons-book-minus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6M8 3v9l3-3l3 3V3M8 3h6m0 0h4a2 2 0 0 1 2 2v7m2 7h-6"></svg:path>`,
})
export class MajesticonsBookMinusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBookOpenIcon],svg[majesticons-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 4.85c-2.195-1.022-5.52-1.565-8.633.979A1 1 0 0 0 2 6.603V19a1 1 0 0 0 1.633.774c2.736-2.236 5.734-1.31 7.367-.255zm2 0v14.669c1.633-1.056 4.63-1.981 7.367.255A1 1 0 0 0 22 19V6.603a1 1 0 0 0-.367-.774C18.52 3.285 15.195 3.828 13 4.849z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsBookOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBookOpenLineIcon],svg[majesticons-book-open-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.603c1.667-1.271 5.5-2.86 9 0V19c-3.5-2.86-7.333-1.271-9 0m0-12.397c-1.667-1.271-5.5-2.86-9 0V19c3.5-2.86 7.333-1.271 9 0m0-12.397V19"></svg:path>`,
})
export class MajesticonsBookOpenLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBookPlusIcon],svg[majesticons-book-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 16v3m0 3v-3m0 0h3m-3 0h-3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h7.803A6 6 0 0 1 21 13.341V5a3 3 0 0 0-3-3zm2 10V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7l-2.293-2.293a1 1 0 0 0-1.414 0z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsBookPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBookPlusLineIcon],svg[majesticons-book-plus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6M8 3v9l3-3l3 3V3M8 3h6m0 0h4a2 2 0 0 1 2 2v7m-1 4v3m0 3v-3m0 0h3m-3 0h-3"></svg:path>`,
})
export class MajesticonsBookPlusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBookmarkIcon],svg[majesticons-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 2a3 3 0 0 0-3 3v15.138a1.5 1.5 0 0 0 2.244 1.303l5.26-3.006a1 1 0 0 1 .992 0l5.26 3.006A1.5 1.5 0 0 0 20 20.138V5a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBookmarkBookIcon],svg[majesticons-bookmark-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-6v8.755a.5.5 0 0 1-.832.374l-1.836-1.632a.5.5 0 0 0-.664 0L7.832 12.13A.5.5 0 0 1 7 11.755V3H5z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsBookmarkBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBookmarkBookLineIcon],svg[majesticons-bookmark-book-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-3v9a1 1 0 0 1-1.555.832L11 13.202l-2.445 1.63A1 1 0 0 1 7 14V5H6zm3 0v7.132l1.445-.964a1 1 0 0 1 1.11 0l1.445.964V5H9zM3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6z"></svg:path></svg:g>`,
})
export class MajesticonsBookmarkBookLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBookmarkLineIcon],svg[majesticons-bookmark-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 3H7a2 2 0 0 0-2 2v15.138a.5.5 0 0 0 .748.434l5.26-3.005a2 2 0 0 1 1.984 0l5.26 3.006a.5.5 0 0 0 .748-.435V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MajesticonsBookmarkLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBookmarkMinusIcon],svg[majesticons-bookmark-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v15.138a1.5 1.5 0 0 1-2.244 1.303l-5.26-3.006a1 1 0 0 0-.992 0l-5.26 3.006A1.5 1.5 0 0 1 4 20.138zm11 4a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsBookmarkMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBookmarkMinusLineIcon],svg[majesticons-bookmark-minus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 3H7a2 2 0 0 0-2 2v15.138a.5.5 0 0 0 .748.434l5.26-3.005a2 2 0 0 1 1.984 0l5.26 3.006a.5.5 0 0 0 .748-.435V5a2 2 0 0 0-2-2m-8 7h6"></svg:path>`,
})
export class MajesticonsBookmarkMinusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBookmarkPlusIcon],svg[majesticons-bookmark-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v15.138a1.5 1.5 0 0 1-2.244 1.303l-5.26-3.006a1 1 0 0 0-.992 0l-5.26 3.006A1.5 1.5 0 0 1 4 20.138zm7 2a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsBookmarkPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBookmarkPlusLineIcon],svg[majesticons-bookmark-plus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 3H7a2 2 0 0 0-2 2v15.138a.5.5 0 0 0 .748.434l5.26-3.005a2 2 0 0 1 1.984 0l5.26 3.006a.5.5 0 0 0 .748-.435V5a2 2 0 0 0-2-2m-5 4v3m0 3v-3m0 0H9m3 0h3"></svg:path>`,
})
export class MajesticonsBookmarkPlusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBoxIcon],svg[majesticons-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.47 2.152a1 1 0 0 1 1.06 0l6.904 4.315L12 10.84L4.566 6.467zM3.008 7.871A1 1 0 0 0 3 8v8a1 1 0 0 0 .47.848L11 21.554v-8.982L3.008 7.87zM13 21.554l7.53-4.706A1 1 0 0 0 21 16V8q0-.065-.008-.129L13 12.571z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBoxLineIcon],svg[majesticons-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 8l8-5l4 2.5M4 8v8l8 5M4 8l4 2.5m4 2.5l8-5m-8 5v8m0-8l-4-2.5M20 8v8l-8 5m8-13l-4-2.5m-8 5l8-5"></svg:path>`,
})
export class MajesticonsBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBriefcaseIcon],svg[majesticons-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h3a3 3 0 0 1 3 3v2h-7v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1H2v-2a3 3 0 0 1 3-3h3zm-6 8v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4h-7v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1zm8-7h4V6a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1zm3 7h-2v-2h2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsBriefcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBriefcaseLineIcon],svg[majesticons-briefcase-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8V6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2m6 0h4a2 2 0 0 1 2 2v3m-6-5H9m0 0H5a2 2 0 0 0-2 2v3m0 0v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5M3 13h7m11 0h-7m0 0v-2h-4v2m4 0v2h-4v-2"></svg:path>`,
})
export class MajesticonsBriefcaseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBrowserIcon],svg[majesticons-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M3 8v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8M3 8h18"></svg:path><svg:path fill="currentColor" d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2H3z"></svg:path></svg:g>`,
})
export class MajesticonsBrowserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBrowserCookieIcon],svg[majesticons-browser-cookie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M3 8v10a2 2 0 0 0 2 2h4M3 8h18m0 0v2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18 12v1h2a1 1 0 0 1 1 1v2h1a1 1 0 0 1 1 1a6 6 0 1 1-6-6a1 1 0 0 1 1 1m-4 4a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1m4 2a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2H3z"></svg:path></svg:g>`,
})
export class MajesticonsBrowserCookieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBrowserCookieLineIcon],svg[majesticons-browser-cookie-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M3 8v10a2 2 0 0 0 2 2h4M3 8h18m0 0v2m-3 9h.001M22 17a5 5 0 1 1-5-5v2h3v3z"></svg:path>`,
})
export class MajesticonsBrowserCookieLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBrowserLineIcon],svg[majesticons-browser-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M3 8v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8M3 8h18"></svg:path>`,
})
export class MajesticonsBrowserLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBug2Icon],svg[majesticons-bug-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.293 3.293a1 1 0 0 1 1.414 0l1.876 1.876A6.4 6.4 0 0 1 12 5q.772.002 1.445.14l1.848-1.847a1 1 0 1 1 1.414 1.414L15.45 5.965A5.5 5.5 0 0 1 17.249 8H18c.173 0 .456-.06.666-.212c.159-.114.334-.314.334-.788a1 1 0 1 1 2 0c0 1.126-.491 1.926-1.166 2.412A3.23 3.23 0 0 1 18 10h-.086c.06.36.086.7.086 1v1h2a1 1 0 1 1 0 2h-2v1c0 .3-.026.64-.086 1H18c.493 0 1.211.14 1.834.588C20.51 17.075 21 17.875 21 19a1 1 0 1 1-2 0c0-.474-.175-.674-.334-.788A1.24 1.24 0 0 0 18 18h-.751a5.5 5.5 0 0 1-1.552 1.857C14.766 20.563 13.543 21 12 21s-2.765-.437-3.697-1.143c-.7-.53-1.2-1.188-1.552-1.857H6c-.173 0-.456.06-.666.212c-.159.114-.334.314-.334.788a1 1 0 1 1-2 0c0-1.126.492-1.926 1.166-2.412A3.23 3.23 0 0 1 6 16h.086c-.06-.36-.086-.7-.086-1v-1H4a1 1 0 1 1 0-2h2v-1q0-.523.065-1H6c-.493 0-1.211-.14-1.834-.588C3.492 8.926 3 8.126 3 7a1 1 0 0 1 2 0c0 .474.175.674.334.788c.21.152.493.212.666.212h.696A5.34 5.34 0 0 1 8.58 5.994L7.293 4.707a1 1 0 0 1 0-1.414M12 9a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2zm-3 4a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1m5-1a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsBug2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBug2LineIcon],svg[majesticons-bug-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 4l-2.251 2.251m0 0A5.8 5.8 0 0 0 12 6a5.6 5.6 0 0 0-1.711.289m3.46-.038c1.551.49 2.417 1.623 2.858 2.749M8 4l2.289 2.289m0 0C9.135 6.67 7.914 7.479 7.339 9m9.268 0A5.7 5.7 0 0 1 17 11v2m-.393-4H18c.667 0 2-.4 2-2m-3 6v2a5.7 5.7 0 0 1-.393 2M17 13h3m-3.393 4c-.585 1.494-1.918 3-4.607 3s-4.022-1.506-4.607-3m9.214 0H18c.667 0 2 .4 2 2M7.338 9C7.125 9.564 7 10.226 7 11v2m.338-4H6c-.667 0-2-.4-2-2m3 6v2c0 .546.107 1.272.393 2M7 13H4m3.393 4H6c-.667 0-2 .4-2 2m10-6"></svg:path>`,
})
export class MajesticonsBug2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBurgerIcon],svg[majesticons-burger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 15l3.172-3.172a2.83 2.83 0 0 1 2-.828H20a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2h3.657c1.5 0 2.939.596 4 1.657z"></svg:path><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15h18v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.467 4.554C7.27 3.457 9.58 3 12 3s4.73.457 6.533 1.554c1.844 1.121 3.109 2.886 3.402 5.328C22.082 11.106 21.067 12 20 12H4c-1.067 0-2.082-.894-1.935-2.118c.293-2.442 1.558-4.207 3.402-5.328M7 6a1 1 0 0 0 0 2h.001a1 1 0 0 0 0-2zm8 1a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1m-4 1a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsBurgerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBurgerLineIcon],svg[majesticons-burger-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m15 15l3.379-3.379a2.12 2.12 0 0 1 1.5-.621H20a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2h4.515a6 6 0 0 1 4.242 1.757zM3 15h18v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path><svg:path d="M12 4c-4.623 0-8.432 1.756-8.942 6c-.066.55.39 1 .942 1h16c.552 0 1.008-.45.942-1c-.51-4.244-4.319-6-8.942-6M7.001 8H7m5.002 0"></svg:path></svg:g>`,
})
export class MajesticonsBurgerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBusIcon],svg[majesticons-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 19a2 2 0 0 1-2-2v-4m2 6v1.5a.5.5 0 0 0 .5.5v0a.5.5 0 0 0 .5-.5V19m-1 0h1m11 0a2 2 0 0 0 2-2v-4m-2 6v1.5a.5.5 0 0 1-.5.5v0a.5.5 0 0 1-.5-.5V19m1 0h-1M4 13V7m0 6h8m8 0V7m0 6h-8m-5 6h10M4 7V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2M4 7h8m8 0h-8m0 0v6"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4 13h16v6H4zm3 3a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m9-1a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2H4z"></svg:path></svg:g>`,
})
export class MajesticonsBusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsBusLineIcon],svg[majesticons-bus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 19a2 2 0 0 1-2-2v-4m2 6v1.5a.5.5 0 0 0 .5.5v0a.5.5 0 0 0 .5-.5V19m-1 0h1m11 0a2 2 0 0 0 2-2v-4m-2 6v1.5a.5.5 0 0 1-.5.5v0a.5.5 0 0 1-.5-.5V19m1 0h-1M4 13V7m0 6h8m8 0V7m0 6h-8m-5 6h10M4 7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v0M4 7h8m8 0h-8m0 0v6m4 3h.001"></svg:path>`,
})
export class MajesticonsBusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCakeIcon],svg[majesticons-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3h.01M7 3h.01M17 3h.01"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7 5a1 1 0 0 1 1 1v2h3V6a1 1 0 1 1 2 0v2h3V6a1 1 0 1 1 2 0v2.1a5.005 5.005 0 0 1 3.937 4.102c-.4.155-.75.383-1.047.63c-.532.44-.966.994-1.302 1.46c-.265.367-.714.708-1.588.708s-1.324-.342-1.588-.71A2.36 2.36 0 0 1 16 13a1 1 0 1 0-2 0c0 .34-.11.872-.412 1.29c-.264.368-.714.71-1.588.71s-1.324-.342-1.588-.71A2.36 2.36 0 0 1 10 13a1 1 0 1 0-2 0c0 .34-.11.872-.412 1.29c-.264.368-.714.71-1.588.71s-1.323-.341-1.588-.709c-.336-.465-.77-1.019-1.302-1.46a3.8 3.8 0 0 0-1.047-.629A5.005 5.005 0 0 1 6 8.1V6a1 1 0 0 1 1-1m-5 9.52V19a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4.48c-.27.256-.532.583-.79.94c-.635.883-1.685 1.54-3.21 1.54c-1.367 0-2.353-.529-3-1.273c-.647.744-1.633 1.273-3 1.273s-2.353-.529-3-1.273C8.353 16.47 7.367 17 6 17c-1.525 0-2.575-.657-3.21-1.54a7 7 0 0 0-.79-.94" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsCakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCakeLineIcon],svg[majesticons-cake-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 9a4 4 0 0 0-4 4v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a4 4 0 0 0-4-4v0M7 9h10M7 9V6m10 3V6m-5 0v3m0-6h.01M7 3h.01M17 3h.01"></svg:path><svg:path d="M3 13c0 1 .6 3 3 3s3-2 3-3c0 1 .6 3 3 3s3-2 3-3c0 1 .6 3 3 3s3-2 3-3"></svg:path></svg:g>`,
})
export class MajesticonsCakeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCalculatorIcon],svg[majesticons-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm0 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1zm1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm3 1a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m1 2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm-5 1a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m10-3a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsCalculatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCalculatorLineIcon],svg[majesticons-calculator-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 14v3M9 7v4h6V7zM7 21h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2m2-7h.01M12 14h.01M12 17h.01M9 17h.01"></svg:path>`,
})
export class MajesticonsCalculatorLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCalendarIcon],svg[majesticons-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 7v2h16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 5h2a2 2 0 0 1 2 2v2H4V7a2 2 0 0 1 2-2h2m8 0V3m0 2H8m0-2v2M4 9.5V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9.5"></svg:path></svg:g>`,
})
export class MajesticonsCalendarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCalendarLineIcon],svg[majesticons-calendar-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9M4 9V7a2 2 0 0 1 2-2h2M4 9h16m0 0V7a2 2 0 0 0-2-2h-2m0 0V3m0 2H8m0-2v2"></svg:path>`,
})
export class MajesticonsCalendarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCalendarPlusIcon],svg[majesticons-calendar-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 16v3m0 3v-3m0 0h3m-3 0h-3"></svg:path><svg:path fill="currentColor" d="M4 7v2h16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 5h2a2 2 0 0 1 2 2v2H4V7a2 2 0 0 1 2-2h2m8 0V3m0 2H8m0-2v2M4 9.5V19a2 2 0 0 0 2 2h7m7-11.5v2.75"></svg:path></svg:g>`,
})
export class MajesticonsCalendarPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCalendarPlusLineIcon],svg[majesticons-calendar-plus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 9v10a2 2 0 0 0 2 2h6M4 9V7a2 2 0 0 1 2-2h2M4 9h16m0 0V7a2 2 0 0 0-2-2h-2m4 4v3m-4-7V3m0 2H8m0-2v2m11 11v3m0 3v-3m0 0h3m-3 0h-3"></svg:path>`,
})
export class MajesticonsCalendarPlusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCameraIcon],svg[majesticons-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.574 4.336A3 3 0 0 1 10.07 3h3.86a3 3 0 0 1 2.496 1.336l.812 1.219A1 1 0 0 0 18.07 6H19a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h.93a1 1 0 0 0 .832-.445l.812-1.22zM10 13a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCameraLineIcon],svg[majesticons-camera-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 18V9a2 2 0 0 1 2-2h.93a2 2 0 0 0 1.664-.89l.812-1.22A2 2 0 0 1 10.07 4h3.86a2 2 0 0 1 1.664.89l.812 1.22A2 2 0 0 0 18.07 7H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2"></svg:path><svg:circle cx="12" cy="13" r="3"></svg:circle></svg:g>`,
})
export class MajesticonsCameraLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCameraOffIcon],svg[majesticons-camera-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 3l18 18"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.172 6H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14c.35 0 .688-.06 1-.17l-5.087-5.089a4 4 0 1 1-5.654-5.654zm5.502 5.503a2 2 0 1 0 2.823 2.823zM22 17.172V9a3 3 0 0 0-3-3h-.93a1 1 0 0 1-.832-.445l-.812-1.22A3 3 0 0 0 13.93 3h-3.86a3 3 0 0 0-1.708.534z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsCameraOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCameraOffLineIcon],svg[majesticons-camera-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2m2-3h4.93a2 2 0 0 1 1.664.89l.812 1.22A2 2 0 0 0 18.07 7H19a2 2 0 0 1 2 2v6.5M9.5 9.877a4 4 0 1 0 5.5 5.768M3 3l18 18"></svg:path>`,
})
export class MajesticonsCameraOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCarIcon],svg[majesticons-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 11l2.48-5.788A2 2 0 0 1 7.32 4h9.362a2 2 0 0 1 1.838 1.212L21 11M3 11h18M3 11v7m18-7v7m-3 0v.5a1.5 1.5 0 0 0 1.5 1.5v0a1.5 1.5 0 0 0 1.5-1.5V18m-3 0H6m12 0h3M6 18v.5A1.5 1.5 0 0 1 4.5 20v0A1.5 1.5 0 0 1 3 18.5V18m3 0H3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3 11h18v7H3zm3 3a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m11-1a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsCarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCarLineIcon],svg[majesticons-car-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 11l2.48-5.788A2 2 0 0 1 7.32 4h9.362a2 2 0 0 1 1.838 1.212L21 11M3 11h18M3 11v7m18-7v7m-3 0v.5a1.5 1.5 0 0 0 1.5 1.5v0a1.5 1.5 0 0 0 1.5-1.5V18m-3 0H6m12 0h3M6 18v.5A1.5 1.5 0 0 1 4.5 20v0A1.5 1.5 0 0 1 3 18.5V18m3 0H3m4-4h.001M17 14h.001"></svg:path>`,
})
export class MajesticonsCarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCashIcon],svg[majesticons-cash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M15 4c1.306 0 2.418.835 2.83 2H9a5 5 0 0 0-5 5v4.83A3.001 3.001 0 0 1 2 13V7a3 3 0 0 1 3-3h10zm4 4H9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3zm-3 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsCashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCashLineIcon],svg[majesticons-cash-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 11a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6zm3-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H9z"></svg:path><svg:path d="M5 6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2v2H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v2h-2V7a1 1 0 0 0-1-1H5z"></svg:path><svg:path d="M14 13a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0z"></svg:path></svg:g>`,
})
export class MajesticonsCashLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCentCircleIcon],svg[majesticons-cent-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m12-6a1 1 0 1 0-2 0v1.1a5.002 5.002 0 0 0 0 9.8V18a1 1 0 1 0 2 0v-1.1c.98-.2 1.856-.685 2.536-1.364a1 1 0 1 0-1.415-1.415a3 3 0 1 1 0-4.243a1 1 0 1 0 1.415-1.414A5 5 0 0 0 13 7.1z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsCentCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCentCircleLineIcon],svg[majesticons-cent-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M12 16a4 4 0 0 1 0-8m0 8v2m0-2a4 4 0 0 0 2.828-1.172M12 8V6m0 2c1.105 0 2.105.448 2.828 1.172"></svg:path></svg:g>`,
})
export class MajesticonsCentCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChartBarIcon],svg[majesticons-chart-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M18 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2zm-8 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-8zm-7 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2z" fill="currentColor"></svg:path><svg:path d="M18 5V3a2 2 0 0 0-2 2h2zm0 14V5h-2v14h2zm0 0h-2a2 2 0 0 0 2 2v-2zm2 0h-2v2h2v-2zm0 0v2a2 2 0 0 0 2-2h-2zm0-14v14h2V5h-2zm0 0h2a2 2 0 0 0-2-2v2zm-2 0h2V3h-2v2zm-7 4a2 2 0 0 0-2 2h2V9zm2 0h-2v2h2V9zm2 2a2 2 0 0 0-2-2v2h2zm0 8v-8h-2v8h2zm-2 2a2 2 0 0 0 2-2h-2v2zm-2 0h2v-2h-2v2zm-2-2a2 2 0 0 0 2 2v-2H9zm0-8v8h2v-8H9zm-5 4a2 2 0 0 0-2 2h2v-2zm2 0H4v2h2v-2zm2 2a2 2 0 0 0-2-2v2h2zm0 2v-2H6v2h2zm-2 2a2 2 0 0 0 2-2H6v2zm-2 0h2v-2H4v2zm-2-2a2 2 0 0 0 2 2v-2H2zm0-2v2h2v-2H2z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsChartBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChartBarLineIcon],svg[majesticons-chart-bar-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19 3a3 3 0 0 0-3 3v12a3 3 0 1 0 6 0V6a3 3 0 0 0-3-3zm-1 3a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0V6zm-9 6a3 3 0 1 1 6 0v6a3 3 0 1 1-6 0v-6zm3-1a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1zM2 18a3 3 0 1 1 6 0a3 3 0 0 1-6 0zm3-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2z"></svg:path></svg:g>`,
})
export class MajesticonsChartBarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChartPieIcon],svg[majesticons-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M12 21a9 9 0 0 1-9-9c0-4.248 2.943-7.854 6.9-8.808c.58-.14 1.1.329 1.1.925V11a2 2 0 0 0 2 2h6.883c.596 0 1.064.52.925 1.1c-.954 3.957-4.56 6.9-8.808 6.9zm3-17v5h5c-.333-1.667-1.8-5-5-5z" fill="currentColor"></svg:path><svg:path d="M9.9 3.192l.235.973l-.235-.973zM20.808 14.1l.972.234l-.972-.234zM15 9h-1a1 1 0 0 0 1 1V9zm0-5V3a1 1 0 0 0-1 1h1zm5 5v1a1 1 0 0 0 .98-1.196L20 9zM2 12c0 5.523 4.477 10 10 10v-2a8 8 0 0 1-8-8H2zm7.666-9.78C5.264 3.28 2 7.285 2 12h2c0-3.78 2.62-6.989 6.135-7.835L9.666 2.22zM12 4.117c0-1.15-1.037-2.21-2.334-1.897l.469 1.945a.146.146 0 0 1-.12-.028C10 4.123 10 4.112 10 4.117h2zM12 11V4.117h-2V11h2zm1 1a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3v-2zm6.883 0H13v2h6.883v-2zm1.897 2.334c.312-1.296-.748-2.334-1.897-2.334v2c.005 0-.006.001-.02-.016a.145.145 0 0 1-.027-.119l1.944.469zM12 22c4.715 0 8.72-3.264 9.78-7.666l-1.945-.469C18.99 17.38 15.78 20 12 20v2zm4-13V4h-2v5h2zm4-1h-5v2h5V8zm-5-3c1.203 0 2.105.611 2.785 1.488c.694.895 1.091 1.993 1.234 2.708l1.962-.392c-.19-.952-.694-2.354-1.616-3.542C18.429 4.055 16.997 3 15 3v2z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsChartPieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChartPieLineIcon],svg[majesticons-chart-pie-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 12c0-3.732 2.554-6.907 6-7.802V11a3 3 0 0 0 3 3h6.802c-.895 3.446-4.07 6-7.802 6a8 8 0 0 1-8-8zm8-7.883c0-1.15-1.037-2.21-2.334-1.897C5.264 3.28 2 7.285 2 12c0 5.523 4.477 10 10 10c4.715 0 8.72-3.264 9.78-7.666c.312-1.296-.748-2.334-1.897-2.334H13a1 1 0 0 1-1-1V4.117zM15 3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 .98-1.196c-.19-.952-.693-2.354-1.615-3.542C18.429 4.055 16.997 3 15 3zm1 5V5.155c.722.234 1.308.718 1.785 1.333c.37.476.654 1.01.862 1.512H16z"></svg:path></svg:g>`,
})
export class MajesticonsChartPieLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChatIcon],svg[majesticons-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0-7.605-4.185L3 21l4.185-1.395A8.96 8.96 0 0 0 12 21"></svg:path>`,
})
export class MajesticonsChatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChat2Icon],svg[majesticons-chat-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19c5.523 0 10-3.582 10-8s-4.477-8-10-8S2 6.582 2 11c0 2.157 1.067 4.114 2.801 5.553C4.271 18.65 3 20 2 21c3 0 4.527-.979 6.32-2.559c1.14.36 2.38.559 3.68.559"></svg:path>`,
})
export class MajesticonsChat2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChat2LineIcon],svg[majesticons-chat-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19c5.523 0 10-3.582 10-8s-4.477-8-10-8S2 6.582 2 11c0 2.157 1.067 4.114 2.801 5.553C4.271 18.65 3 20 2 21c3 0 4.527-.979 6.32-2.559c1.14.36 2.38.559 3.68.559"></svg:path>`,
})
export class MajesticonsChat2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChat2TextIcon],svg[majesticons-chat-2-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 11c0-5.167 5.145-9 11-9s11 3.833 11 9s-5.145 9-11 9c-1.198 0-2.354-.156-3.437-.447c-.785.662-1.59 1.244-2.54 1.672C4.894 21.735 3.617 22 2 22a1 1 0 0 1-.707-1.707c.876-.876 1.843-1.914 2.368-3.416C2.029 15.327 1 13.28 1 11m7-5a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsChat2TextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChat2TextLineIcon],svg[majesticons-chat-2-text-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8h8m-8 3h8m-8 3h3m11-3c0 4.418-4.477 8-10 8c-1.3 0-2.54-.198-3.68-.559C6.528 20.021 5 21 2 21c1-1 2.27-2.35 2.801-4.447C3.067 15.114 2 13.157 2 11c0-4.418 4.477-8 10-8s10 3.582 10 8"></svg:path>`,
})
export class MajesticonsChat2TextLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChatLineIcon],svg[majesticons-chat-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0-7.605-4.185L3 21l4.185-1.395A8.96 8.96 0 0 0 12 21"></svg:path>`,
})
export class MajesticonsChatLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChatSignalIcon],svg[majesticons-chat-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.935-1.3l-3.749 1.249a1 1 0 0 1-1.265-1.265l1.25-3.749A9.96 9.96 0 0 1 2 12m10.221-7.752a1 1 0 0 0-.442 1.95a8.01 8.01 0 0 1 6.023 6.023a1 1 0 1 0 1.95-.442a10.01 10.01 0 0 0-7.53-7.531zM9 9a1 1 0 0 1 1-1a6 6 0 0 1 6 6a1 1 0 1 1-2 0a4 4 0 0 0-4-4a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2a1 1 0 1 0 2 0a2 2 0 0 0-2-2" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsChatSignalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChatSignalLineIcon],svg[majesticons-chat-signal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3.223a9.003 9.003 0 0 0-5.605 13.592L3 21l4.185-1.395A9.003 9.003 0 0 0 20.777 14m0-4A9.01 9.01 0 0 0 14 3.223M17 12a5 5 0 0 0-5-5m1 5a1 1 0 0 0-1-1"></svg:path>`,
})
export class MajesticonsChatSignalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChatStatusIcon],svg[majesticons-chat-status-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12a9.97 9.97 0 0 0 1.3 4.935l-1.249 3.749a1 1 0 0 0 1.265 1.265l3.749-1.25A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2m0 6c-.902 0-1.731.297-2.4.8a1 1 0 1 1-1.2-1.6a6 6 0 0 1 8.4 8.4a1 1 0 0 1-1.598-1.2A4 4 0 0 0 12 8m-5 3a1 1 0 0 1 1 1a4 4 0 0 0 4 4a1 1 0 1 1 0 2a6 6 0 0 1-6-6a1 1 0 0 1 1-1m5-1a2 2 0 1 0 0 4a2 2 0 0 0 0-4" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsChatStatusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChatStatusLineIcon],svg[majesticons-chat-status-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 3.512a9.03 9.03 0 0 1 5.5 5.523M11 3.055a9 9 0 0 0-6.605 13.76L3 21l4.185-1.395A9 9 0 0 0 20.945 13"></svg:path><svg:path d="M12 17a5 5 0 0 1-5-5m2-4a5 5 0 0 1 7 7"></svg:path><svg:circle cx="12" cy="12" r="1"></svg:circle></svg:g>`,
})
export class MajesticonsChatStatusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChatTextIcon],svg[majesticons-chat-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.935-1.3l-3.749 1.249a1 1 0 0 1-1.265-1.265l1.25-3.749A9.96 9.96 0 0 1 2 12m6-5a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsChatTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChatTextLineIcon],svg[majesticons-chat-text-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9h8m-8 3h8m-8 3h3m10-3a9 9 0 0 1-13.815 7.605L3 21l1.395-4.185A9 9 0 1 1 21 12"></svg:path>`,
})
export class MajesticonsChatTextLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChatsIcon],svg[majesticons-chats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13.584 7a5.001 5.001 0 1 0-8.809 4.675L4 14l2.325-.775q.322.204.675.359"></svg:path><svg:path fill="currentColor" d="M15 20a5 5 0 1 1 4.225-2.325L20 20l-2.325-.775A5 5 0 0 1 15 20"></svg:path></svg:g>`,
})
export class MajesticonsChatsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChats2Icon],svg[majesticons-chats-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 18.72C6.339 20.134 4.82 21 2 21c1-1 2.27-2.35 2.801-4.447C3.067 15.114 2 13.157 2 11c0-4.418 4.477-8 10-8c5.1 0 9.308 3.054 9.923 7"></svg:path><svg:path fill="currentColor" d="M16 19.889c-3.314 0-6-1.99-6-4.445S12.686 11 16 11s6 1.99 6 4.444c0 1.199-.64 2.286-1.68 3.085c.317 1.165 1.08 1.915 1.68 2.471c-1.8 0-2.716-.544-3.792-1.422c-.684.2-1.428.31-2.208.31z"></svg:path></svg:g>`,
})
export class MajesticonsChats2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChats2LineIcon],svg[majesticons-chats-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 18.72C6.339 20.134 4.82 21 2 21c1-1 2.27-2.35 2.801-4.447C3.067 15.114 2 13.157 2 11c0-4.418 4.477-8 10-8c5.1 0 9.308 3.054 9.923 7"></svg:path><svg:path d="M16 19.889c-3.314 0-6-1.99-6-4.445S12.686 11 16 11s6 1.99 6 4.444c0 1.199-.64 2.286-1.68 3.085c.317 1.165 1.08 1.915 1.68 2.471c-1.8 0-2.716-.544-3.792-1.422c-.684.2-1.428.31-2.208.31z"></svg:path></svg:g>`,
})
export class MajesticonsChats2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChatsLineIcon],svg[majesticons-chats-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.584 7a5.001 5.001 0 1 0-8.809 4.675L4 14l2.325-.775q.322.204.675.359M15 20a5 5 0 1 1 4.225-2.325L20 20l-2.325-.775A5 5 0 0 1 15 20"></svg:path>`,
})
export class MajesticonsChatsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCheckIcon],svg[majesticons-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5zm14.707 6.707a1 1 0 0 0-1.414-1.414L9 15.586l-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l10-10z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCheckCircleIcon],svg[majesticons-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsCheckCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCheckCircleLineIcon],svg[majesticons-check-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12z"></svg:path><svg:path d="M15.707 9.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L11 12.586l3.293-3.293a1 1 0 0 1 1.414 0z"></svg:path></svg:g>`,
})
export class MajesticonsCheckCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCheckLineIcon],svg[majesticons-check-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19.707 6.293a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L9 15.586l9.293-9.293a1 1 0 0 1 1.414 0z"></svg:path></svg:g>`,
})
export class MajesticonsCheckLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCheckboxListIcon],svg[majesticons-checkbox-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 5h10m-10 7h10m-10 7h10"></svg:path><svg:rect width="4" height="4" x="3" y="3" fill="currentColor" rx="1"></svg:rect><svg:rect width="4" height="4" x="3" y="10" fill="currentColor" rx="1"></svg:rect><svg:rect width="4" height="4" x="3" y="17" fill="currentColor" rx="1"></svg:rect></svg:g>`,
})
export class MajesticonsCheckboxListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCheckboxListDetailIcon],svg[majesticons-checkbox-list-detail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 5h10M11 9h5"></svg:path><svg:rect width="4" height="4" x="3" y="5" fill="currentColor" rx="1"></svg:rect><svg:path d="M11 15h10m-10 4h5"></svg:path><svg:rect width="4" height="4" x="3" y="15" fill="currentColor" rx="1"></svg:rect></svg:g>`,
})
export class MajesticonsCheckboxListDetailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCheckboxListDetailLineIcon],svg[majesticons-checkbox-list-detail-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 5h10M11 9h5"></svg:path><svg:rect width="4" height="4" x="3" y="5" rx="1"></svg:rect><svg:path d="M11 15h10m-10 4h5"></svg:path><svg:rect width="4" height="4" x="3" y="15" rx="1"></svg:rect></svg:g>`,
})
export class MajesticonsCheckboxListDetailLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCheckboxListLineIcon],svg[majesticons-checkbox-list-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 5h10m-10 7h10m-10 7h10"></svg:path><svg:rect width="4" height="4" x="3" y="3" rx="1"></svg:rect><svg:rect width="4" height="4" x="3" y="10" rx="1"></svg:rect><svg:rect width="4" height="4" x="3" y="17" rx="1"></svg:rect></svg:g>`,
})
export class MajesticonsCheckboxListLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCheeseIcon],svg[majesticons-cheese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.783 3.024a1 1 0 0 1 .664.082l10 5A1 1 0 0 1 22 9v4a1 1 0 0 1-1 1c-.173 0-.456.06-.666.211c-.159.115-.334.315-.334.789s.175.674.334.789c.21.15.493.211.666.211a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4.5a1 1 0 0 1-.894-.553c-1.34-2.679-2.02-6.427-1.136-9.824c.903-3.475 3.434-6.515 8.313-7.6zM8 17a1 1 0 1 1 0-2h.001a1 1 0 1 1 0 2zm4-4a1 1 0 0 0 1 1h.001a1 1 0 1 0 0-2H13a1 1 0 0 0-1 1m3 4a1 1 0 1 1 0-2h.001a1 1 0 1 1 0 2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsCheeseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCheeseLineIcon],svg[majesticons-cheese-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 9v4c-.667 0-2 .4-2 2s1.333 2 2 2v3H4.5C2 15 2 6 11 4zm0 0H5m10 7"></svg:path>`,
})
export class MajesticonsCheeseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChevronDoubleDownIcon],svg[majesticons-chevron-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M8 5a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4A1 1 0 0 0 16 5H8zm0 8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4A1 1 0 0 0 16 13H8z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsChevronDoubleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChevronDoubleDownLineIcon],svg[majesticons-chevron-double-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.293 12.293a1 1 0 0 1 1.414 0L12 17.586l5.293-5.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z"></svg:path><svg:path d="M5.293 4.293a1 1 0 0 1 1.414 0L12 9.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z"></svg:path></svg:g>`,
})
export class MajesticonsChevronDoubleDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChevronDoubleLeftIcon],svg[majesticons-chevron-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M11 8a1 1 0 0 0-1.707-.707l-4 4a1 1 0 0 0 0 1.414l4 4A1 1 0 0 0 11 16V8zm8 0a1 1 0 0 0-1.707-.707l-4 4a1 1 0 0 0 0 1.414l4 4A1 1 0 0 0 19 16V8z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsChevronDoubleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChevronDoubleLeftLineIcon],svg[majesticons-chevron-double-left-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.707 5.293a1 1 0 0 1 0 1.414L6.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z"></svg:path><svg:path d="M19.707 5.293a1 1 0 0 1 0 1.414L14.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z"></svg:path></svg:g>`,
})
export class MajesticonsChevronDoubleLeftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChevronDoubleRightIcon],svg[majesticons-chevron-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M5 16a1 1 0 0 0 1.707.707l4-4a1 1 0 0 0 0-1.414l-4-4A1 1 0 0 0 5 8v8zm8 0a1 1 0 0 0 1.707.707l4-4a1 1 0 0 0 0-1.414l-4-4A1 1 0 0 0 13 8v8z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsChevronDoubleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChevronDoubleRightLineIcon],svg[majesticons-chevron-double-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.293 5.293a1 1 0 0 0 0 1.414L17.586 12l-5.293 5.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 0z"></svg:path><svg:path d="M4.293 5.293a1 1 0 0 0 0 1.414L9.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6a1 1 0 0 0-1.414 0z"></svg:path></svg:g>`,
})
export class MajesticonsChevronDoubleRightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChevronDoubleUpIcon],svg[majesticons-chevron-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M8 11a1 1 0 0 1-.707-1.707l4-4a1 1 0 0 1 1.414 0l4 4A1 1 0 0 1 16 11H8zm0 8a1 1 0 0 1-.707-1.707l4-4a1 1 0 0 1 1.414 0l4 4A1 1 0 0 1 16 19H8z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsChevronDoubleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChevronDoubleUpLineIcon],svg[majesticons-chevron-double-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.293 11.707a1 1 0 0 0 1.414 0L12 6.414l5.293 5.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 0 1.414z"></svg:path><svg:path d="M5.293 19.707a1 1 0 0 0 1.414 0L12 14.414l5.293 5.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 0 1.414z"></svg:path></svg:g>`,
})
export class MajesticonsChevronDoubleUpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChevronDownIcon],svg[majesticons-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 10l-5 5l-5-5"></svg:path>`,
})
export class MajesticonsChevronDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChevronDownCircleIcon],svg[majesticons-chevron-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18M9.707 10.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L12 12.586z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsChevronDownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChevronDownCircleLineIcon],svg[majesticons-chevron-down-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m9 11l3 3l3-3"></svg:path></svg:g>`,
})
export class MajesticonsChevronDownCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChevronDownLineIcon],svg[majesticons-chevron-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 10l-5 5l-5-5"></svg:path>`,
})
export class MajesticonsChevronDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChevronLeftIcon],svg[majesticons-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 7l-5 5l5 5"></svg:path>`,
})
export class MajesticonsChevronLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChevronLeftCircleIcon],svg[majesticons-chevron-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m1.707-11.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L11.414 12z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsChevronLeftCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChevronLeftCircleLineIcon],svg[majesticons-chevron-left-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m13 9l-3 3l3 3"></svg:path><svg:circle cx="12" cy="12" r="9"></svg:circle></svg:g>`,
})
export class MajesticonsChevronLeftCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChevronLeftLineIcon],svg[majesticons-chevron-left-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 7l-5 5l5 5"></svg:path>`,
})
export class MajesticonsChevronLeftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChevronRightIcon],svg[majesticons-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 7l5 5l-5 5"></svg:path>`,
})
export class MajesticonsChevronRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChevronRightCircleIcon],svg[majesticons-chevron-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18M10.293 9.707a1 1 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L12.586 12z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsChevronRightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChevronRightCircleLineIcon],svg[majesticons-chevron-right-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m11 9l3 3l-3 3"></svg:path></svg:g>`,
})
export class MajesticonsChevronRightCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChevronRightLineIcon],svg[majesticons-chevron-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 7l5 5l-5 5"></svg:path>`,
})
export class MajesticonsChevronRightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChevronUpIcon],svg[majesticons-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 14l-5-5l-5 5"></svg:path>`,
})
export class MajesticonsChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChevronUpCircleIcon],svg[majesticons-chevron-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-2.293-7.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L12 11.414z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsChevronUpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChevronUpCircleLineIcon],svg[majesticons-chevron-up-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m9 13l3-3l3 3"></svg:path></svg:g>`,
})
export class MajesticonsChevronUpCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChevronUpLineIcon],svg[majesticons-chevron-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 14l-5-5l-5 5"></svg:path>`,
})
export class MajesticonsChevronUpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChipIcon],svg[majesticons-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M10 3a1 1 0 0 0-2 0v1H7a3 3 0 0 0-3 3v1H3a1 1 0 0 0 0 2h1v4H3a1 1 0 1 0 0 2h1v1a3 3 0 0 0 3 3h1v1a1 1 0 1 0 2 0v-1h4v1a1 1 0 1 0 2 0v-1h1a3 3 0 0 0 3-3v-1h1a1 1 0 1 0 0-2h-1v-4h1a1 1 0 1 0 0-2h-1V7a3 3 0 0 0-3-3h-1V3a1 1 0 1 0-2 0v1h-4V3zm-.25 6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-4.5zM12 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsChipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChipLineIcon],svg[majesticons-chip-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 2a1 1 0 0 1 1 1v1h4V3a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v1h1a1 1 0 1 1 0 2h-1v4h1a1 1 0 1 1 0 2h-1v1a3 3 0 0 1-3 3h-1v1a1 1 0 1 1-2 0v-1h-4v1a1 1 0 1 1-2 0v-1H7a3 3 0 0 1-3-3v-1H3a1 1 0 1 1 0-2h1v-4H3a1 1 0 0 1 0-2h1V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 1-1zm8 16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10zM8 9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9zm2 1v4h4v-4h-4z"></svg:path></svg:g>`,
})
export class MajesticonsChipLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChromecastIcon],svg[majesticons-chromecast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 20h.01M7 20a4 4 0 0 0-4-4m8 4a8 8 0 0 0-8-8"></svg:path><svg:path fill="currentColor" d="M19 4H5a2 2 0 0 0-2 2v2.5c4 .167 12 2.7 12 11.5h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></svg:path></svg:g>`,
})
export class MajesticonsChromecastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChromecastLineIcon],svg[majesticons-chromecast-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 20h.01M7 20a4 4 0 0 0-4-4m8 4a8 8 0 0 0-8-8"></svg:path><svg:path d="M3 8.5V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"></svg:path></svg:g>`,
})
export class MajesticonsChromecastLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChurchIcon],svg[majesticons-church-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1.5l7.6 5.7A1 1 0 0 1 20 16h-1v3h2a1 1 0 1 1 0 2h-7v-3a2 2 0 1 0-4 0v3H3a1 1 0 1 1 0-2h2v-3H4a1 1 0 0 1-.6-1.8L11 8.5V7h-1a1 1 0 0 1 0-2h1V4a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsChurchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsChurchLineIcon],svg[majesticons-church-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 9l-8 6h2v5m6-11l8 6h-2v5M12 9V4m6 16h3m-3 0h-4M3 20h3m0 0h4m0-14h4m-4 14v-3a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v3m-4 0h4"></svg:path>`,
})
export class MajesticonsChurchLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsClipboardIcon],svg[majesticons-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.17 4A3 3 0 0 1 10 2h4c1.306 0 2.418.835 2.83 2H18a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM10 4a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsClipboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsClipboardCheckIcon],svg[majesticons-clipboard-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 2a3 3 0 0 0-2.83 2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-1.17A3 3 0 0 0 14 2zM9 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m6.78 6.625a1 1 0 1 0-1.56-1.25l-3.303 4.128l-1.21-1.21a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.488-.082l4-5z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsClipboardCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsClipboardCheckLineIcon],svg[majesticons-clipboard-check-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M8 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v0M8 5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v0"></svg:path><svg:path d="m9 14l2 2l4-5"></svg:path></svg:g>`,
})
export class MajesticonsClipboardCheckLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsClipboardCopyIcon],svg[majesticons-clipboard-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M10 4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2h-4zm0-2a3.001 3.001 0 0 0-2.83 2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-4h-8.586l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 1 1 1.414 1.414L12.414 13H21V7a3 3 0 0 0-3-3h-1.17A3.001 3.001 0 0 0 14 2h-4z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsClipboardCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsClipboardCopyLineIcon],svg[majesticons-clipboard-copy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 4a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2h-4zM7.17 4A3.001 3.001 0 0 1 10 2h4c1.306 0 2.418.835 2.83 2H18a3 3 0 0 1 3 3v3a1 1 0 1 1-2 0V7a1 1 0 0 0-1-1h-1.17A3.001 3.001 0 0 1 14 8h-4a3.001 3.001 0 0 1-2.83-2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1.17zm7.537 6.293a1 1 0 0 1 0 1.414L13.414 13H20a1 1 0 1 1 0 2h-6.586l1.293 1.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0z"></svg:path></svg:g>`,
})
export class MajesticonsClipboardCopyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsClipboardLineIcon],svg[majesticons-clipboard-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M8 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v0M8 5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v0"></svg:path>`,
})
export class MajesticonsClipboardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsClipboardListIcon],svg[majesticons-clipboard-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M10 4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2h-4zm0-2a3.001 3.001 0 0 0-2.83 2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-1.17A3.001 3.001 0 0 0 14 2h-4zm-2 8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H8z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsClipboardListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsClipboardListLineIcon],svg[majesticons-clipboard-list-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 4a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2h-4zM7.17 4A3.001 3.001 0 0 1 10 2h4c1.306 0 2.418.835 2.83 2H18a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1.17zm0 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1.17A3.001 3.001 0 0 1 14 8h-4a3.001 3.001 0 0 1-2.83-2zM7 11a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class MajesticonsClipboardListLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsClipboardMinusIcon],svg[majesticons-clipboard-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 2a3 3 0 0 0-2.83 2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-1.17A3 3 0 0 0 14 2zM9 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m6 8a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsClipboardMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsClipboardMinusLineIcon],svg[majesticons-clipboard-minus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M8 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v0M8 5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v0m-7 9h6"></svg:path>`,
})
export class MajesticonsClipboardMinusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsClipboardPlusIcon],svg[majesticons-clipboard-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 2a3 3 0 0 0-2.83 2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-1.17A3 3 0 0 0 14 2zM9 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m2 6a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsClipboardPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsClipboardPlusLineIcon],svg[majesticons-clipboard-plus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M8 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v0M8 5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v0m-4 6v3m0 3v-3m0 0H9m3 0h3"></svg:path>`,
})
export class MajesticonsClipboardPlusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsClockIcon],svg[majesticons-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m11-5a1 1 0 1 0-2 0v3.764a3 3 0 0 0 1.658 2.683l2.895 1.447a1 1 0 1 0 .894-1.788l-2.894-1.448a1 1 0 0 1-.553-.894z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsClockLineIcon],svg[majesticons-clock-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M12 7v3.764a2 2 0 0 0 1.106 1.789L16 14"></svg:path></svg:g>`,
})
export class MajesticonsClockLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsClockPlusIcon],svg[majesticons-clock-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 16v3m0 3v-3m0 0h-3m3 0h3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10q.881 0 1.72-.147A6 6 0 0 1 13 19c0-1.746.746-3.318 1.936-4.414l-2.278-1.139A3 3 0 0 1 11 10.764V7a1 1 0 1 1 2 0v3.764a1 1 0 0 0 .553.894l2.894 1.448c.149.074.271.18.362.306A6 6 0 0 1 19 13c1.033 0 2.004.26 2.853.72A10 10 0 0 0 22 12c0-5.523-4.477-10-10-10" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsClockPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsClockPlusLineIcon],svg[majesticons-clock-plus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 1 0-9 9m0-14v3.764a2 2 0 0 0 1.106 1.789L16 14m3 2v3m0 3v-3m0 0h-3m3 0h3"></svg:path>`,
})
export class MajesticonsClockPlusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCloseIcon],svg[majesticons-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12L7 7m5 5l5 5m-5-5l5-5m-5 5l-5 5"></svg:path>`,
})
export class MajesticonsCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCloseCircleIcon],svg[majesticons-close-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm8.207-3.207a1 1 0 0 0-1.414 1.414L10.586 12l-1.793 1.793a1 1 0 1 0 1.414 1.414L12 13.414l1.793 1.793a1 1 0 0 0 1.414-1.414L13.414 12l1.793-1.793a1 1 0 0 0-1.414-1.414L12 10.586l-1.793-1.793z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsCloseCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCloseCircleLineIcon],svg[majesticons-close-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm-1.793 6.793a1 1 0 0 0-1.414 1.414L10.586 12l-1.793 1.793a1 1 0 1 0 1.414 1.414L12 13.414l1.793 1.793a1 1 0 0 0 1.414-1.414L13.414 12l1.793-1.793a1 1 0 0 0-1.414-1.414L12 10.586l-1.793-1.793z"></svg:path></svg:g>`,
})
export class MajesticonsCloseCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCloseLineIcon],svg[majesticons-close-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12L7 7m5 5l5 5m-5-5l5-5m-5 5l-5 5"></svg:path>`,
})
export class MajesticonsCloseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCloudIcon],svg[majesticons-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 13.5C2 17.9 5.667 19 7.5 19h10c1.5 0 4.5-.9 4.5-4.5S19 10 17.5 10c0-1.5-1.5-5-5-5c-2.8 0-4.5 2-5 3C5.667 8 2 9.1 2 13.5"></svg:path>`,
})
export class MajesticonsCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCloudDownloadIcon],svg[majesticons-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M6.913 7.029C7.751 5.772 9.626 4 12.5 4c2.13 0 3.65 1.08 4.607 2.33a7.133 7.133 0 0 1 1.285 2.745c.785.127 1.695.43 2.505 1.014C22.092 10.948 23 12.373 23 14.5c0 2.126-.908 3.551-2.103 4.412C19.753 19.735 18.41 20 17.5 20h-10c-1.077 0-2.67-.315-4.022-1.288C2.075 17.701 1 16.026 1 13.5s1.075-4.201 2.478-5.212c1.124-.809 2.413-1.163 3.435-1.26zM13 10a1 1 0 1 0-2 0v4.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L13 14.586V10z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsCloudDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCloudDownloadLineIcon],svg[majesticons-cloud-download-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.5 6c-2.294 0-3.71 1.655-4.106 2.447A1 1 0 0 1 7.5 9c-.757 0-1.914.235-2.853.912C3.758 10.552 3 11.626 3 13.5c0 1.458.459 2.415 1.05 3.06c.607.663 1.418 1.062 2.204 1.269a1 1 0 0 1-.508 1.934c-1.049-.276-2.238-.833-3.171-1.852C1.624 16.873 1 15.423 1 13.5c0-2.526 1.075-4.201 2.478-5.212c1.124-.809 2.413-1.163 3.435-1.26C7.751 5.773 9.626 4 12.5 4c2.13 0 3.65 1.08 4.607 2.33a7.133 7.133 0 0 1 1.285 2.745c.785.127 1.695.43 2.505 1.014C22.092 10.948 23 12.373 23 14.5c0 1.516-.462 2.697-1.196 3.571c-.72.86-1.65 1.362-2.498 1.634a1 1 0 1 1-.612-1.904c.586-.188 1.157-.513 1.578-1.015c.408-.486.728-1.202.728-2.286c0-1.474-.592-2.299-1.272-2.789c-.73-.526-1.638-.711-2.228-.711a1 1 0 0 1-1-1c0-.502-.284-1.543-.982-2.455C14.85 6.67 13.87 6 12.5 6zm-.5 4a1 1 0 0 1 1 1v5.586l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L11 16.586V11a1 1 0 0 1 1-1z"></svg:path></svg:g>`,
})
export class MajesticonsCloudDownloadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCloudLineIcon],svg[majesticons-cloud-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 13.5C2 17.9 5.667 19 7.5 19h10c1.5 0 4.5-.9 4.5-4.5S19 10 17.5 10c0-1.5-1.5-5-5-5c-2.8 0-4.5 2-5 3C5.667 8 2 9.1 2 13.5"></svg:path>`,
})
export class MajesticonsCloudLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCloudUploadIcon],svg[majesticons-cloud-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M6.913 7.029C7.751 5.772 9.626 4 12.5 4c2.13 0 3.65 1.08 4.607 2.33a7.133 7.133 0 0 1 1.285 2.745c.785.127 1.695.43 2.505 1.014C22.092 10.948 23 12.373 23 14.5c0 2.126-.908 3.551-2.103 4.412C19.753 19.735 18.41 20 17.5 20H13v-6.586l1.293 1.293a1 1 0 0 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0l-3 3a1 1 0 1 0 1.414 1.414L11 13.414V20H7.5c-1.077 0-2.67-.315-4.022-1.288C2.075 17.701 1 16.026 1 13.5s1.075-4.201 2.478-5.212c1.124-.809 2.413-1.163 3.435-1.26z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsCloudUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCloudUploadLineIcon],svg[majesticons-cloud-upload-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.5 6c-2.294 0-3.71 1.655-4.106 2.447A1 1 0 0 1 7.5 9c-.757 0-1.914.235-2.853.912C3.758 10.552 3 11.626 3 13.5s.758 2.949 1.647 3.588c.94.677 2.096.912 2.853.912a1 1 0 1 1 0 2c-1.077 0-2.67-.315-4.022-1.288C2.075 17.701 1 16.026 1 13.5s1.075-4.201 2.478-5.212c1.124-.809 2.413-1.163 3.435-1.26C7.751 5.773 9.626 4 12.5 4c2.13 0 3.65 1.08 4.607 2.33a7.133 7.133 0 0 1 1.285 2.745c.785.127 1.695.43 2.505 1.014C22.092 10.948 23 12.373 23 14.5c0 2.126-.908 3.551-2.103 4.412C19.753 19.735 18.41 20 17.5 20a1 1 0 1 1 0-2c.59 0 1.497-.185 2.228-.712c.68-.49 1.272-1.314 1.272-2.788c0-1.474-.592-2.299-1.272-2.789c-.73-.526-1.638-.711-2.228-.711a1 1 0 0 1-1-1c0-.502-.284-1.543-.982-2.455C14.85 6.67 13.87 6 12.5 6zm-1.207 4.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L13 13.414V19a1 1 0 1 1-2 0v-5.586l-1.293 1.293a1 1 0 0 1-1.414-1.414l3-3z"></svg:path></svg:g>`,
})
export class MajesticonsCloudUploadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCodeIcon],svg[majesticons-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 7l-5 5l5 5m8 0l5-5l-5-5"></svg:path>`,
})
export class MajesticonsCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCodeBlockIcon],svg[majesticons-code-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm5 1a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-8 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm4 0a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm-4 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsCodeBlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCodeBlockLineIcon],svg[majesticons-code-block-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h5m3 0h2m0 4h-6m-3 0H7m0 4h5m3 0h2M3 8V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path>`,
})
export class MajesticonsCodeBlockLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCodeLineIcon],svg[majesticons-code-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 7l-5 5l5 5m8 0l5-5l-5-5"></svg:path>`,
})
export class MajesticonsCodeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCogIcon],svg[majesticons-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M11 2a2 2 0 0 0-2 2v.757l-.707.707L9 4.757l-.536-.535a2 2 0 0 0-2.828 0L4.222 5.636a2 2 0 0 0 0 2.828L4.757 9H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h.757l-.535.536a2 2 0 0 0 0 2.828l1.414 1.414a2 2 0 0 0 2.828 0l-.707-.707l.707.707l.536-.535V20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-.757l.536.535a2 2 0 0 0 2.828 0l1.414-1.414a2 2 0 0 0 0-2.829L19.243 15H20a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-.757l.535-.536a2 2 0 0 0 0-2.828l-1.414-1.414a2 2 0 0 0-2.828 0L15 4.757V4a2 2 0 0 0-2-2h-2zm5 10a4 4 0 1 1-8 0a4 4 0 0 1 8 0zm-4 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCogLineIcon],svg[majesticons-cog-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 2a2 2 0 0 0-2 2v.757l-.707.707L9 4.757l-.536-.535a2 2 0 0 0-2.828 0L4.222 5.636a2 2 0 0 0 0 2.828L4.757 9H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h.757l-.535.536a2 2 0 0 0 0 2.828l1.414 1.414a2 2 0 0 0 2.828 0L9 19.243V20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-.757l.536.535a2 2 0 0 0 2.828 0l1.414-1.414a2 2 0 0 0 0-2.829L19.243 15H20a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-.757l.535-.536a2 2 0 0 0 0-2.828l-1.414-1.414a2 2 0 0 0-2.828 0L15 4.757V4a2 2 0 0 0-2-2h-2zm0 2h2v.757c0 1.782 2.154 2.675 3.414 1.415l.536-.536l1.414 1.414l-.536.536C16.568 8.846 17.461 11 19.243 11H20v2h-.757c-1.782 0-2.674 2.154-1.415 3.414l.536.536l-1.414 1.414l-.536-.536c-1.26-1.26-3.414-.367-3.414 1.415V20h-2v-.757c0-1.782-2.154-2.674-3.414-1.415l-.536.536l-1.414-1.414l.536-.536C7.432 15.154 6.539 13 4.757 13H4v-2h.757c1.782 0 2.675-2.154 1.415-3.414l-.536-.536L7.05 5.636l.536.536C8.846 7.432 11 6.539 11 4.757V4zm-1 8a2 2 0 1 1 4 0a2 2 0 0 1-4 0zm2-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8z"></svg:path></svg:g>`,
})
export class MajesticonsCogLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCoinsIcon],svg[majesticons-coins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M21 8c0 1.02-1.186 1.92-3 2.462c-1.134.34-2.513.538-4 .538s-2.866-.199-4-.538C8.187 9.92 7 9.02 7 8c0-1.657 3.134-3 7-3s7 1.343 7 3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 8c0-1.657-3.134-3-7-3S7 6.343 7 8m14 0v4c0 1.02-1.186 1.92-3 2.462c-1.134.34-2.513.538-4 .538s-2.866-.199-4-.538C8.187 13.92 7 13.02 7 12V8m14 0c0 1.02-1.186 1.92-3 2.462c-1.134.34-2.513.538-4 .538s-2.866-.199-4-.538C8.187 9.92 7 9.02 7 8"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12v4c0 1.02 1.187 1.92 3 2.462c1.134.34 2.513.538 4 .538s2.866-.199 4-.538c1.813-.542 3-1.442 3-2.462v-1M3 12c0-1.197 1.635-2.23 4-2.711M3 12c0 1.02 1.187 1.92 3 2.462c1.134.34 2.513.538 4 .538c.695 0 1.366-.043 2-.124"></svg:path></svg:g>`,
})
export class MajesticonsCoinsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCoinsLineIcon],svg[majesticons-coins-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 8c0-1.657-3.134-3-7-3S7 6.343 7 8m14 0v4c0 1.02-1.186 1.92-3 2.462c-1.134.34-2.513.538-4 .538s-2.866-.199-4-.538C8.187 13.92 7 13.02 7 12V8m14 0c0 1.02-1.186 1.92-3 2.462c-1.134.34-2.513.538-4 .538s-2.866-.199-4-.538C8.187 9.92 7 9.02 7 8"></svg:path><svg:path d="M3 12v4c0 1.02 1.187 1.92 3 2.462c1.134.34 2.513.538 4 .538s2.866-.199 4-.538c1.813-.542 3-1.442 3-2.462v-1M3 12c0-1.197 1.635-2.23 4-2.711M3 12c0 1.02 1.187 1.92 3 2.462c1.134.34 2.513.538 4 .538c.695 0 1.366-.043 2-.124"></svg:path></svg:g>`,
})
export class MajesticonsCoinsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCollectionIcon],svg[majesticons-collection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M8 21a2 2 0 0 1-2-2h12a2 2 0 0 1-2 2H8zm-4-5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2H4zm0-1a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsCollectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCollectionLineIcon],svg[majesticons-collection-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 18a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-.17A3.001 3.001 0 0 0 20 15v-.17A3.001 3.001 0 0 0 22 12V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v6c0 1.306.835 2.418 2 2.83V15c0 1.306.835 2.418 2 2.83V18zm2 0h8a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm-2-3h12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-1-2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5z"></svg:path></svg:g>`,
})
export class MajesticonsCollectionLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsColorSwatchIcon],svg[majesticons-color-swatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M19 22a3 3 0 0 0 3-3v-4a3.001 3.001 0 0 0-2.361-2.932L13 18.708v.792c0 .58-.17 1.439-.694 2.167a3.212 3.212 0 0 1-.275.333H19zm-6-4.707l5.738-5.738a3.001 3.001 0 0 0-.445-3.676L16.12 5.707A3 3 0 0 0 13 5v12.294zM9 2a3 3 0 0 1 3 3v14.5c0 .42-.13 1.061-.506 1.583c-.357.496-.957.917-1.994.917H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h4zM7 18a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsColorSwatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsColorSwatchLineIcon],svg[majesticons-color-swatch-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v16a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3V5zm3-1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5V5a1 1 0 0 0-1-1H5z"></svg:path><svg:path d="M14.707 7.121a1 1 0 0 0-1.414 0l-1.586 1.586a1 1 0 1 1-1.414-1.414l1.586-1.586a3 3 0 0 1 4.242 0l2.172 2.172a3 3 0 0 1 .115 4.12H19a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-8a1 1 0 1 1 0-2h8a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2.586l-4.707 4.708a1 1 0 1 1-1.414-1.414l6.586-6.586a1 1 0 0 0 0-1.414L14.707 7.12zM7 15a1 1 0 0 1 1 1v.001a1 1 0 1 1-2 0V16a1 1 0 0 1 1-1z"></svg:path></svg:g>`,
})
export class MajesticonsColorSwatchLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCometIcon],svg[majesticons-comet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m9.879 5.636l.707-.707a6 6 0 0 1 8.485 8.485l-2.121 2.122M7.757 7.757L5.636 9.88M3.515 12l-.707.707m12.02 4.95l-1.414 1.414m-.707-4.95l-.707.707M9.879 16.95l-2.122 2.12m2.122-7.778l-6.364 6.364"></svg:path><svg:circle cx="14.828" cy="9.172" r="2" fill="currentColor" transform="rotate(45 14.828 9.172)"></svg:circle></svg:g>`,
})
export class MajesticonsCometIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCometLineIcon],svg[majesticons-comet-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m9.879 5.636l.707-.707a6 6 0 0 1 8.485 8.485l-2.121 2.122M7.757 7.757L5.636 9.88M3.515 12l-.707.707m12.02 4.95l-1.414 1.414m-.707-4.95l-.707.707M9.879 16.95l-2.122 2.12m2.122-7.778l-6.364 6.364"></svg:path><svg:circle cx="14.828" cy="9.172" r="2" transform="rotate(45 14.828 9.172)"></svg:circle></svg:g>`,
})
export class MajesticonsCometLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCommentIcon],svg[majesticons-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 4H5a2 2 0 0 0-2 2v15l3.467-2.6a2 2 0 0 1 1.2-.4H19a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class MajesticonsCommentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsComment2Icon],svg[majesticons-comment-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 4H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.188c1 0 1.812.811 1.812 1.812c0 .808.976 1.212 1.547.641l1.867-1.867A2 2 0 0 1 14.828 18H19a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class MajesticonsComment2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsComment2LineIcon],svg[majesticons-comment-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 4H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.188c1 0 1.812.811 1.812 1.812c0 .808.976 1.212 1.547.641l1.867-1.867A2 2 0 0 1 14.828 18H19a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class MajesticonsComment2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsComment2TextIcon],svg[majesticons-comment-2-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-4.172a1 1 0 0 0-.707.293l-1.867 1.867C11.054 22.361 9 21.51 9 19.812A.81.81 0 0 0 8.188 19H5a3 3 0 0 1-3-3zm5 0a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsComment2TextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsComment2TextLineIcon],svg[majesticons-comment-2-text-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 11h10M7 14h4m3.828 4H19a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.188c1 0 1.812.811 1.812 1.812v0c0 .808.976 1.212 1.547.641l1.867-1.867A2 2 0 0 1 14.828 18"></svg:path>`,
})
export class MajesticonsComment2TextLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCommentLineIcon],svg[majesticons-comment-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 4H5a2 2 0 0 0-2 2v15l3.467-2.6a2 2 0 0 1 1.2-.4H19a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class MajesticonsCommentLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCommentTextIcon],svg[majesticons-comment-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7.667a1 1 0 0 0-.6.2L3.6 21.8A1 1 0 0 1 2 21zm5 0a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsCommentTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCommentTextLineIcon],svg[majesticons-comment-text-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 11h10M7 14h4m-8 4V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.667a2 2 0 0 0-1.2.4L3 21z"></svg:path>`,
})
export class MajesticonsCommentTextLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCommentsIcon],svg[majesticons-comments-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 12h-.394a2 2 0 0 0-1.11.336L3 14V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v2"></svg:path><svg:path fill="currentColor" d="M12 10h7a2 2 0 0 1 2 2v9l-2.496-1.664a2 2 0 0 0-1.11-.336H12a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2"></svg:path></svg:g>`,
})
export class MajesticonsCommentsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsComments2Icon],svg[majesticons-comments-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 14v-1a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3"></svg:path><svg:path fill="currentColor" d="M12 11h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.64A1.36 1.36 0 0 0 17 20.36a.68.68 0 0 1-1.16.48l-1.254-1.254A2 2 0 0 0 13.172 19H12a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2"></svg:path></svg:g>`,
})
export class MajesticonsComments2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsComments2LineIcon],svg[majesticons-comments-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 14v-1a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3m-2 3h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.64A1.36 1.36 0 0 0 17 20.36a.68.68 0 0 1-1.16.48l-1.254-1.254A2 2 0 0 0 13.172 19H12a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2"></svg:path>`,
})
export class MajesticonsComments2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCommentsLineIcon],svg[majesticons-comments-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12h-.394a2 2 0 0 0-1.11.336L3 14V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v2m-2 3h7a2 2 0 0 1 2 2v9l-2.496-1.664a2 2 0 0 0-1.11-.336H12a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MajesticonsCommentsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCommunityIcon],svg[majesticons-community-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6 6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3h-3.51a3.8 3.8 0 0 0 .51-1.911v-5.438a3.87 3.87 0 0 0-1.172-2.766l-4-3.911C9.52 5.694 7.53 5.487 6 6.351zm11 1a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H18a1 1 0 0 1-1-1m-3-1a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2zm3 6a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H18a1 1 0 0 1-1-1m1 4a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2z"></svg:path><svg:path d="M5.879 8.707a3 3 0 0 1 4.242 0l3 3A3 3 0 0 1 14 13.828V18a3 3 0 0 1-3 3H9v-3a1 1 0 1 0-2 0v3H5a3 3 0 0 1-3-3v-4.172a3 3 0 0 1 .879-2.12z"></svg:path></svg:g>`,
})
export class MajesticonsCommunityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCommunityLineIcon],svg[majesticons-community-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6m0 0v-6.172a2 2 0 0 0-.586-1.414l-3-3a2 2 0 0 0-2.828 0l-3 3A2 2 0 0 0 3 13.828V18a2 2 0 0 0 2 2h3m5 0H8m0-4v4m9.001-12H17m.002 4H17m.001 4H17"></svg:path>`,
})
export class MajesticonsCommunityLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCompassIcon],svg[majesticons-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm5.191 6.074a1 1 0 0 0-1.265-1.265L9.562 8.93a1 1 0 0 0-.632.632l-2.121 6.364a1 1 0 0 0 1.265 1.265l6.364-2.121a1 1 0 0 0 .632-.633l2.121-6.363zM12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCompass2Icon],svg[majesticons-compass-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m14.243-4.243L9.879 9.88l-2.122 6.364l6.364-2.122l2.122-6.364z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsCompass2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCompass2LineIcon],svg[majesticons-compass-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m9.879 9.879l6.364-2.122l-2.122 6.364l-6.364 2.122L9.88 9.879z"></svg:path></svg:g>`,
})
export class MajesticonsCompass2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCompassLineIcon],svg[majesticons-compass-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm5.191 6.074a1 1 0 0 0-1.265-1.265L9.562 8.93a1 1 0 0 0-.632.632l-2.121 6.364a1 1 0 0 0 1.265 1.265l6.364-2.121a1 1 0 0 0 .632-.632l2.121-6.364zM9.34 14.662l1.33-3.993l3.992-1.33l-1.33 3.992l-3.992 1.33z"></svg:path></svg:g>`,
})
export class MajesticonsCompassLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsContactIcon],svg[majesticons-contact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H5zm7 7c0 .662-.215 1.275-.578 1.77c.62.465 1.073 1.088 1.444 1.73a1 1 0 1 1-1.732 1c-.313-.541-.61-.908-.93-1.142C9.909 14.141 9.54 14 9 14c-.54 0-.908.14-1.205.358c-.32.234-.616.6-.93 1.143a1 1 0 0 1-1.73-1.002c.37-.641.824-1.264 1.443-1.728A3 3 0 1 1 12 11zm3-3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3zm0 3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3zm0 3a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1zm-6-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsContactIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsContactLineIcon],svg[majesticons-contact-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H5zM4 7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7zm11 1a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3zm0 3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3zm0 3a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1z"></svg:path><svg:path d="M9 10a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0z"></svg:path><svg:path d="M9 14c-.99 0-1.707.65-2.106 1.447a1 1 0 1 1-1.788-.894C5.707 13.349 6.99 12 9 12c2.01 0 3.293 1.35 3.894 2.553a1 1 0 1 1-1.788.894C10.707 14.651 9.99 14 9 14z"></svg:path></svg:g>`,
})
export class MajesticonsContactLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCookieIcon],svg[majesticons-cookie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.85 4.787C8.731 3.44 10.958 3 12.456 3h1.005a1 1 0 0 1 1 1v3h2.014a1 1 0 0 1 1 1v2h3.019a1 1 0 0 1 1 1v1c0 3.503-1.395 5.808-3.297 7.206c-1.85 1.36-4.087 1.794-5.74 1.794s-3.89-.434-5.742-1.794C4.814 17.808 3.419 15.503 3.419 12c0-3.528 1.5-5.828 3.431-7.213M9.442 7a1 1 0 1 0 0 2h.001a1 1 0 0 0 0-2zm-3.01 5a1 1 0 0 1 1-1h.002a1 1 0 1 1 0 2h-.001a1 1 0 0 1-1-1zm6.024 0a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2zm-3.01 4a1 1 0 0 1 1-1h.002a1 1 0 1 1 0 2h-.001a1 1 0 0 1-1-1zm7.029-2a1 1 0 1 0 0 2a1 1 0 1 0 0-2" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsCookieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCookieLineIcon],svg[majesticons-cookie-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.419 12c0-6.4 5.358-8 8.037-8h1.005v4h3.014v3h4.019v1c0 6.4-5.024 8-8.038 8s-8.037-1.6-8.037-8m12.054 3"></svg:path>`,
})
export class MajesticonsCookieLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCovidIcon],svg[majesticons-covid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 1a1 1 0 0 0 0 2h1v1.062A7.96 7.96 0 0 0 7.094 5.68L5.914 4.5l.793-.793a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 1.414 1.414l.793-.793l1.18 1.18A7.96 7.96 0 0 0 4.062 11H3v-1a1 1 0 0 0-2 0v4a1 1 0 1 0 2 0v-1h1.062c.182 1.46.759 2.8 1.618 3.906l-1.18 1.18l-.793-.793a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414-1.414l-.793-.793l1.18-1.18A7.97 7.97 0 0 0 11 19.938V21h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-1.062a7.97 7.97 0 0 0 3.906-1.618l1.18 1.18l-.793.793a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0-1.414-1.414l-.793.793l-1.18-1.18A7.97 7.97 0 0 0 19.938 13H21v1a1 1 0 1 0 2 0v-4a1 1 0 1 0-2 0v1h-1.062a7.97 7.97 0 0 0-1.618-3.906l1.18-1.18l.793.793a1 1 0 1 0 1.414-1.414l-3-3a1 1 0 1 0-1.414 1.414l.793.793l-1.18 1.18A7.97 7.97 0 0 0 13 4.062V3h1a1 1 0 1 0 0-2zm3 13a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1m-3-3.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m.5-2.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsCovidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCovidExclamationIcon],svg[majesticons-covid-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9 2a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v1.062c1.46.182 2.8.759 3.906 1.618l1.18-1.18l-.793-.793a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1-1.414 1.414l-.793-.793l-1.345 1.346A9 9 0 0 0 7.26 18.155L5.914 19.5l.793.793a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 1 1 1.414-1.414l.793.793l1.18-1.18A7.97 7.97 0 0 1 4.062 13H3v1a1 1 0 1 1-2 0v-4a1 1 0 0 1 2 0v1h1.062A7.96 7.96 0 0 1 5.68 7.094L4.5 5.914l-.793.793a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 1.414l-.793.793l1.18 1.18A7.96 7.96 0 0 1 11 4.062V3h-1a1 1 0 0 1-1-1"></svg:path><svg:path d="M16 9a7 7 0 1 0 0 14a7 7 0 0 0 0-14m-1 10a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1m2-6a1 1 0 1 0-2 0l.001 3a1 1 0 1 0 2 0z"></svg:path></svg:g>`,
})
export class MajesticonsCovidExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCovidExclamationLineIcon],svg[majesticons-covid-exclamation-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12a7 7 0 0 1 7-7m-7 7H2m3 0c0 1.933.784 3.683 2.05 4.95L4.5 19.5M12 5V2m0 3c1.933 0 3.683.784 4.95 2.05L19.5 4.5M12 2h2m-2 0h-2M2 12v-2m0 2v2m17.5-9.5L18 3m1.5 1.5L21 6M4.5 4.5L6 3M4.5 4.5L3 6m1.5-1.5L7 7M4.5 19.5L6 21m-1.5-1.5L3 18m13 1h.001M9 10.5A1.5 1.5 0 0 1 10.5 9m5.501 7L16 13m6 3a6 6 0 1 1-12 0a6 6 0 0 1 12 0"></svg:path>`,
})
export class MajesticonsCovidExclamationLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCovidLineIcon],svg[majesticons-covid-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 12h3m-3 0a6.98 6.98 0 0 1-2.05 4.95M19 12a6.98 6.98 0 0 0-2.05-4.95M12 19v3m0-3a6.98 6.98 0 0 0 4.95-2.05M12 19a6.98 6.98 0 0 1-4.95-2.05M5 12a7 7 0 0 1 7-7m-7 7H2m3 0c0 1.933.784 3.683 2.05 4.95M12 5V2m0 3c1.933 0 3.683.784 4.95 2.05M12 2h2m-2 0h-2m2 20h2m-2 0h-2m12-10v-2m0 2v2M2 12v-2m0 2v2m17.5-9.5L18 3m1.5 1.5L21 6m-1.5-1.5l-2.55 2.55M4.5 4.5L6 3M4.5 4.5L3 6m1.5-1.5L7 7M4.5 19.5L6 21m-1.5-1.5L3 18m1.5 1.5l2.55-2.55M19.5 19.5L18 21m1.5-1.5L21 18m-1.5 1.5l-2.55-2.55M14 14"></svg:path><svg:circle cx="10.5" cy="10.5" r="1.5"></svg:circle></svg:g>`,
})
export class MajesticonsCovidLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCovidOffIcon],svg[majesticons-covid-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 3l18 18"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.379 4.207L2.293 5.293a1 1 0 0 0 1.414 1.414l.793-.793l1.18 1.18A7.96 7.96 0 0 0 4.062 11H3v-1a1 1 0 0 0-2 0v4a1 1 0 1 0 2 0v-1h1.062c.182 1.46.759 2.8 1.618 3.906l-1.18 1.18l-.793-.793a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414-1.414l-.793-.793l1.18-1.18A7.97 7.97 0 0 0 11 19.938V21h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-1.062a7.97 7.97 0 0 0 3.906-1.618l1.18 1.18l-.793.793a1 1 0 0 0 1.414 1.414l1.086-1.086l-5.634-5.633a1 1 0 0 1-.158.012H14a1 1 0 0 1-.987-1.159l-1.208-1.208a2.5 2.5 0 0 1-3.438-3.438zm16.153 10.496A8 8 0 0 0 19.938 13H21v1a1 1 0 1 0 2 0v-4a1 1 0 1 0-2 0v1h-1.062a7.97 7.97 0 0 0-1.618-3.906l1.18-1.18l.793.793a1 1 0 1 0 1.414-1.414l-3-3a1 1 0 1 0-1.414 1.414l.793.793l-1.18 1.18A7.97 7.97 0 0 0 13 4.062V3h1a1 1 0 1 0 0-2h-4a1 1 0 0 0 0 2h1v1.062a8 8 0 0 0-1.703.406z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsCovidOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCovidOffLineIcon],svg[majesticons-covid-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12h3m-3 0a6.98 6.98 0 0 0-2.05-4.95M19 12v1m-7 6v3m0-3a6.98 6.98 0 0 0 4.95-2.05l2.55 2.55L18 21m-6-2a6.98 6.98 0 0 1-4.95-2.05M5 12H2m3 0c0 1.933.784 3.683 2.05 4.95M5 12c0-1.352.47-3.488 1.955-5.045M12 5V2m0 3c1.933 0 3.683.784 4.95 2.05M12 5h-1m1-3h2m-2 0h-2m2 20h2m-2 0h-2m12-10v-2m0 2v2M2 12v-2m0 2v2m17.5-9.5L18 3m1.5 1.5L21 6m-1.5-1.5l-2.55 2.55M3 6l1.5-1.5l2.455 2.455M4.5 19.5L6 21m-1.5-1.5L3 18m1.5 1.5l2.55-2.55M7 7l-.045-.045M9.382 9.5a1.5 1.5 0 0 0 2.01 2.206M3 3l18 18"></svg:path>`,
})
export class MajesticonsCovidOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCpuIcon],svg[majesticons-cpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 2a1 1 0 0 1 1 1v1h4V3a1 1 0 1 1 2 0v1h1a3 3 0 0 1 3 3v1h1a1 1 0 1 1 0 2h-1v4h1a1 1 0 1 1 0 2h-1v1a3 3 0 0 1-3 3h-1v1a1 1 0 1 1-2 0v-1h-4v1a1 1 0 1 1-2 0v-1H7a3 3 0 0 1-3-3v-1H3a1 1 0 1 1 0-2h1v-4H3a1 1 0 0 1 0-2h1V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 1-1m2 8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsCpuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCpuLineIcon],svg[majesticons-cpu-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 0 0-2 2v2m4-4V3m0 2h6m0 0h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2M15 5V3M9 21v-2m6 2v-2M5 15H3m2 0V9m0 0H3m18 6h-2m2-6h-2m-6 1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></svg:path>`,
})
export class MajesticonsCpuLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCreditCardIcon],svg[majesticons-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v1H2V7zm0 3v7a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-7H2zm5 2a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H7z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCreditCardLineIcon],svg[majesticons-credit-card-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7zm3-1a1 1 0 0 0-1 1v1h16V7a1 1 0 0 0-1-1H5zm15 4H4v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7zM6 13a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class MajesticonsCreditCardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCreditcardIcon],svg[majesticons-creditcard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v1H2zm0 3v7a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-7zm5 2a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsCreditcardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCreditcardHandIcon],svg[majesticons-creditcard-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 13V5a2 2 0 0 0-2-2h-2m0 0H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7M13 3v10.5M9 7v3"></svg:path><svg:path fill="currentColor" d="M18.948 9.95L16.998 8v6.587c0 .89-1.077 1.337-1.707.707L13.996 14c-.5-.5-1.701-.8-2.502 0s-.5 2 0 2.5l4.918 4.915a2 2 0 0 0 1.414.585H20a1 1 0 0 0 1-1v-6.1a7 7 0 0 0-2.052-4.95"></svg:path></svg:g>`,
})
export class MajesticonsCreditcardHandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCreditcardHandLineIcon],svg[majesticons-creditcard-hand-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 13V5a2 2 0 0 0-2-2h-2m0 0H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7M13 3v10.5M9 7v3"></svg:path><svg:path d="M21 22v-7.1a7 7 0 0 0-2.052-4.95L16.998 8v6.587c0 .89-1.077 1.337-1.707.707L13.996 14c-.5-.5-1.701-.8-2.502 0s-.5 2 0 2.5l5.503 5.5"></svg:path></svg:g>`,
})
export class MajesticonsCreditcardHandLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCreditcardLineIcon],svg[majesticons-creditcard-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9M3 9V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M3 9h18M7 13h5"></svg:path>`,
})
export class MajesticonsCreditcardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCreditcardPlusIcon],svg[majesticons-creditcard-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 15v3m0 3v-3m0 0h-3m3 0h3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5 4a3 3 0 0 0-3 3v1h20V7a3 3 0 0 0-3-3zM2 17v-7h20v3.528A6 6 0 0 0 12.341 20H5a3 3 0 0 1-3-3m4-4a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsCreditcardPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCreditcardPlusLineIcon],svg[majesticons-creditcard-plus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9v8a2 2 0 0 0 2 2h6M3 9V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2M3 9h18m0 0v3M7 13h5m6 2v3m0 3v-3m0 0h-3m3 0h3"></svg:path>`,
})
export class MajesticonsCreditcardPlusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCrownIcon],svg[majesticons-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3a1 1 0 0 1 .832.445l3.471 5.207l4.182-2.51a1 1 0 0 1 1.503 1.01l-2 13A1 1 0 0 1 19 21H5a1 1 0 0 1-.988-.848l-2-13a1 1 0 0 1 1.503-1.01l4.182 2.51l3.471-5.207A1 1 0 0 1 12 3m-1 11a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsCrownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCrownLineIcon],svg[majesticons-crown-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m3 7l2 13h14l2-13l-5 3l-4-6l-4 6z"></svg:path><svg:circle cx="12" cy="14" r="2"></svg:circle></svg:g>`,
})
export class MajesticonsCrownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCubeIcon],svg[majesticons-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M10.658 2.553a3 3 0 0 1 2.684 0l7.105 3.553A1 1 0 0 1 21 7v.382l-9 4.5l-9-4.5V7a1 1 0 0 1 .553-.894l7.105-3.553zM3 9.618v6.146a3 3 0 0 0 1.658 2.683L11 21.618v-8l-8-4zm10 12l6.342-3.17A3 3 0 0 0 21 15.763V9.618l-8 4v8z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsCubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCubeLineIcon],svg[majesticons-cube-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.447 4.342a1 1 0 0 0-.894 0L6.236 7L12 9.882L17.764 7l-5.317-2.658zM19 8.618l-6 3v7.764l5.447-2.724a1 1 0 0 0 .553-.894V8.618zm-8 10.764v-7.764l-6-3v7.146a1 1 0 0 0 .553.894L11 19.382zm-.342-16.83a3 3 0 0 1 2.684 0l7.105 3.554A1 1 0 0 1 21 7v8.764a3 3 0 0 1-1.658 2.683l-6.895 3.447a1 1 0 0 1-.894 0l-6.895-3.447A3 3 0 0 1 3 15.764V7a1 1 0 0 1 .553-.894l7.105-3.553z"></svg:path></svg:g>`,
})
export class MajesticonsCubeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCupIcon],svg[majesticons-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 5h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 5H4v7a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4zm0 0h2v0a2 2 0 0 1 2 2v4M4 19h14"></svg:path></svg:g>`,
})
export class MajesticonsCupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCupLineIcon],svg[majesticons-cup-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 5H4v7a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-1m0-6v6m0-6h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2M4 19h14"></svg:path>`,
})
export class MajesticonsCupLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCurlyBracesIcon],svg[majesticons-curly-braces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 5H9a2 2 0 0 0-2 2v2c0 1-.6 3-3 3c1 0 3 .6 3 3v2a2 2 0 0 0 2 2h.5m5-14h.5a2 2 0 0 1 2 2v2c0 1 .6 3 3 3c-1 0-3 .6-3 3v2a2 2 0 0 1-2 2h-.5"></svg:path>`,
})
export class MajesticonsCurlyBracesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCurlyBracesLineIcon],svg[majesticons-curly-braces-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 5H9a2 2 0 0 0-2 2v2c0 1-.6 3-3 3c1 0 3 .6 3 3v2a2 2 0 0 0 2 2h.5m5-14h.5a2 2 0 0 1 2 2v2c0 1 .6 3 3 3c-1 0-3 .6-3 3v2a2 2 0 0 1-2 2h-.5"></svg:path>`,
})
export class MajesticonsCurlyBracesLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCursorClickIcon],svg[majesticons-cursor-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M8.949 2.684a1 1 0 0 0-1.898.632l1 3a1 1 0 1 0 1.898-.632l-1-3zm6.758 3.023a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 1.414 1.414l2-2zM3.317 7.051a1 1 0 0 0-.633 1.898l3 1a1 1 0 1 0 .632-1.898l-3-1zm7.025 2.01a1 1 0 0 0-1.282 1.28l4 11a1 1 0 0 0 1.868.03l1.437-3.591l3.928 3.927a1 1 0 1 0 1.414-1.414l-3.928-3.928l3.592-1.436a1 1 0 0 0-.03-1.869l-11-4zm-2.635 4.646a1 1 0 1 0-1.414-1.414l-2 2a1 1 0 1 0 1.414 1.414l2-2z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsCursorClickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsCursorClickLineIcon],svg[majesticons-cursor-click-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.684 2.051a1 1 0 0 1 1.265.633l1 3a1 1 0 0 1-1.898.632l-1-3a1 1 0 0 1 .633-1.265zm8.023 2.242a1 1 0 0 1 0 1.414l-2 2a1 1 0 1 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0zM2.051 7.683a1 1 0 0 1 1.265-.632l3 1a1 1 0 1 1-.632 1.898l-3-1a1 1 0 0 1-.633-1.265zm7.242 1.61a1 1 0 0 1 1.049-.233l11 4a1 1 0 0 1 .03 1.868l-3.593 1.437l3.928 3.928a1 1 0 0 1-1.414 1.414l-3.928-3.928l-1.436 3.592a1 1 0 0 1-1.869-.03l-4-11a1 1 0 0 1 .233-1.048zm2.38 2.38l2.371 6.523l1.027-2.567a1 1 0 0 1 .558-.557l2.567-1.027l-6.524-2.373zm-3.966.62a1 1 0 0 1 0 1.414l-2 2a1 1 0 1 1-1.414-1.414l2-2a1 1 0 0 1 1.414 0z"></svg:path></svg:g>`,
})
export class MajesticonsCursorClickLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDashboardIcon],svg[majesticons-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M5 9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5zm0 13a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5zm10 0a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4zm0-8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsDashboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDashboardLineIcon],svg[majesticons-dashboard-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5zm0-2h4V4H5v3zm0 15a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5zm0-2h4v-8H5v8zm8 0a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2zm6 0h-4v-2h4v2zm-4-6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4zm0-2h4V4h-4v8z"></svg:path></svg:g>`,
})
export class MajesticonsDashboardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDataIcon],svg[majesticons-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M21 7c0 2.21-4.03 4-9 4S3 9.21 3 7s4.03-4 9-4s9 1.79 9 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 7c0 2.21-4.03 4-9 4S3 9.21 3 7m18 0c0-2.21-4.03-4-9-4S3 4.79 3 7m18 0v5M3 7v5m18 0c0 2.21-4.03 4-9 4s-9-1.79-9-4m18 0v5c0 2.21-4.03 4-9 4s-9-1.79-9-4v-5"></svg:path></svg:g>`,
})
export class MajesticonsDataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDataLineIcon],svg[majesticons-data-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 7c0 2.21-4.03 4-9 4S3 9.21 3 7m18 0c0-2.21-4.03-4-9-4S3 4.79 3 7m18 0v5M3 7v5m18 0c0 2.21-4.03 4-9 4s-9-1.79-9-4m18 0v5c0 2.21-4.03 4-9 4s-9-1.79-9-4v-5"></svg:path>`,
})
export class MajesticonsDataLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDataMinusIcon],svg[majesticons-data-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M21 7c0 2.21-4.03 4-9 4S3 9.21 3 7s4.03-4 9-4s9 1.79 9 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 7c0 2.21-4.03 4-9 4S3 9.21 3 7m18 0c0-2.21-4.03-4-9-4S3 4.79 3 7m18 0v5M3 7v5m9 4c-4.97 0-9-1.79-9-4m0 0v5c0 2.21 4.03 4 9 4m9-3h-6"></svg:path></svg:g>`,
})
export class MajesticonsDataMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDataMinusLineIcon],svg[majesticons-data-minus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 7c0 2.21-4.03 4-9 4S3 9.21 3 7m18 0c0-2.21-4.03-4-9-4S3 4.79 3 7m18 0v5M3 7v5m9 4c-4.97 0-9-1.79-9-4m0 0v5c0 2.21 4.03 4 9 4m9-3h-6"></svg:path>`,
})
export class MajesticonsDataMinusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDataPlusIcon],svg[majesticons-data-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M21 7c0 2.21-4.03 4-9 4S3 9.21 3 7s4.03-4 9-4s9 1.79 9 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 7c0 2.21-4.03 4-9 4S3 9.21 3 7m18 0c0-2.21-4.03-4-9-4S3 4.79 3 7m18 0v5M3 7v5m9 4c-4.97 0-9-1.79-9-4m0 0v5c0 2.21 4.03 4 9 4m6-6v3m0 3v-3m0 0h3m-3 0h-3"></svg:path></svg:g>`,
})
export class MajesticonsDataPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDataPlusLineIcon],svg[majesticons-data-plus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 7c0 2.21-4.03 4-9 4S3 9.21 3 7m18 0c0-2.21-4.03-4-9-4S3 4.79 3 7m18 0v5M3 7v5m9 4c-4.97 0-9-1.79-9-4m0 0v5c0 2.21 4.03 4 9 4m6-6v3m0 3v-3m0 0h3m-3 0h-3"></svg:path>`,
})
export class MajesticonsDataPlusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDatabaseIcon],svg[majesticons-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M5.23 3.258C7.014 2.465 9.408 2 12 2c2.592 0 4.986.465 6.77 1.258c.89.396 1.674.893 2.247 1.496C21.596 5.362 22 6.122 22 7v1c0 .151-.081.425-.516.799c-.432.371-1.116.75-2.048 1.09C17.581 10.563 14.952 11 12 11s-5.581-.437-7.436-1.111c-.932-.34-1.616-.719-2.048-1.09C2.081 8.425 2 8.15 2 8V7c0-.878.404-1.638.983-2.246c.573-.603 1.356-1.1 2.247-1.496zM2 10.884V13c0 .151.081.425.516.799c.432.371 1.116.75 2.048 1.09C6.419 15.563 9.048 16 12 16s5.581-.437 7.436-1.111c.932-.34 1.616-.719 2.048-1.09c.435-.374.516-.648.516-.799v-2.116a10.37 10.37 0 0 1-1.88.884C17.994 12.541 15.123 13 12 13c-3.123 0-5.994-.459-8.12-1.232A10.371 10.371 0 0 1 2 10.884zm20 5a10.37 10.37 0 0 1-1.88.884C17.994 17.541 15.123 18 12 18c-3.123 0-5.994-.459-8.12-1.232A10.371 10.371 0 0 1 2 15.884V17c0 .878.404 1.639.983 2.246c.573.603 1.356 1.1 2.247 1.496C7.014 21.535 9.408 22 12 22c2.592 0 4.986-.465 6.77-1.258c.89-.396 1.674-.893 2.247-1.496c.579-.607.983-1.368.983-2.246v-1.116z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsDatabaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDatabaseLineIcon],svg[majesticons-database-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4.432 6.132C4.099 6.482 4 6.773 4 7c0 .227.1.518.432.868c.337.354.872.719 1.61 1.047C7.516 9.569 9.622 10 12 10c2.379 0 4.484-.43 5.958-1.085c.738-.328 1.273-.693 1.61-1.047c.333-.35.432-.641.432-.868c0-.227-.1-.518-.432-.868c-.337-.354-.872-.719-1.61-1.047C16.484 4.431 14.378 4 12 4c-2.379 0-4.484.43-5.958 1.085c-.738.328-1.273.693-1.61 1.047zM20 10.08c-.375.246-.79.466-1.23.662C16.986 11.535 14.592 12 12 12c-2.592 0-4.986-.465-6.77-1.258A8.689 8.689 0 0 1 4 10.08V12c0 .227.1.518.432.868c.337.354.872.719 1.61 1.047C7.516 14.57 9.622 15 12 15c2.379 0 4.484-.43 5.958-1.085c.738-.328 1.273-.693 1.61-1.047c.333-.35.432-.641.432-.868v-1.92zm0 5c-.375.246-.79.466-1.23.662C16.986 16.535 14.592 17 12 17c-2.592 0-4.986-.465-6.77-1.258A8.689 8.689 0 0 1 4 15.08V17c0 .227.1.518.432.868c.337.354.872.719 1.61 1.047C7.516 19.57 9.622 20 12 20c2.379 0 4.484-.43 5.958-1.085c.738-.328 1.273-.693 1.61-1.047c.333-.35.432-.641.432-.868v-1.92zM22 17c0 .878-.404 1.639-.983 2.246c-.573.603-1.356 1.1-2.247 1.496C16.986 21.535 14.592 22 12 22c-2.592 0-4.986-.465-6.77-1.258c-.89-.396-1.674-.893-2.247-1.496C2.404 18.64 2 17.878 2 17V7c0-.878.404-1.638.983-2.246c.573-.603 1.356-1.1 2.247-1.496C7.014 2.465 9.408 2 12 2c2.592 0 4.986.465 6.77 1.258c.89.396 1.674.893 2.247 1.496C21.596 5.362 22 6.122 22 7v10z"></svg:path></svg:g>`,
})
export class MajesticonsDatabaseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDeleteBinIcon],svg[majesticons-delete-bin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M9 7h9v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7h-2M4 7h2m0 0h12M6 7v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7m-9-.5A2.5 2.5 0 0 1 11.5 4h1A2.5 2.5 0 0 1 15 6.5v0"></svg:path></svg:g>`,
})
export class MajesticonsDeleteBinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDeleteBinLineIcon],svg[majesticons-delete-bin-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v0M9 7h6M9 7H6m9 0h3m2 0h-2M4 7h2m0 0v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"></svg:path>`,
})
export class MajesticonsDeleteBinLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDesktopComputerIcon],svg[majesticons-desktop-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-4v2h1a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h1v-2H5a3 3 0 0 1-3-3V6zm11 11h-2v2h2v-2z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsDesktopComputerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDesktopComputerLineIcon],svg[majesticons-desktop-computer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-4v2h1a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h1v-2H5a3 3 0 0 1-3-3V6zm9 11v2h2v-2h-2zM5 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5z"></svg:path></svg:g>`,
})
export class MajesticonsDesktopComputerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDeviceMobileIcon],svg[majesticons-device-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M8 22a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H8zm3-4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsDeviceMobileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDeviceMobileLineIcon],svg[majesticons-device-mobile-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 22a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H8zm-1-3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v14zm3-1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class MajesticonsDeviceMobileLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDeviceTabletIcon],svg[majesticons-device-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M7 22a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7zm4-5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsDeviceTabletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDeviceTabletLineIcon],svg[majesticons-device-tablet-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7 22a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7zm-1-3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v14zm4-1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class MajesticonsDeviceTabletLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDistributeHorizontalIcon],svg[majesticons-distribute-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 20V4m14 16V4"></svg:path><svg:rect width="10" height="4" x="10" y="17" fill="currentColor" rx="2" transform="rotate(-90 10 17)"></svg:rect></svg:g>`,
})
export class MajesticonsDistributeHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDistributeHorizontalLineIcon],svg[majesticons-distribute-horizontal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 20V4m14 16V4"></svg:path><svg:rect width="10" height="4" x="10" y="17" rx="2" transform="rotate(-90 10 17)"></svg:rect></svg:g>`,
})
export class MajesticonsDistributeHorizontalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDistributeVerticalIcon],svg[majesticons-distribute-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 5h16M4 19h16"></svg:path><svg:rect width="10" height="4" x="7" y="10" fill="currentColor" rx="2"></svg:rect></svg:g>`,
})
export class MajesticonsDistributeVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDistributeVerticalLineIcon],svg[majesticons-distribute-vertical-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 5h16M4 19h16"></svg:path><svg:rect width="10" height="4" x="7" y="10" rx="2"></svg:rect></svg:g>`,
})
export class MajesticonsDistributeVerticalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDivideIcon],svg[majesticons-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 12h14"></svg:path><svg:circle cx="12" cy="6" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="18" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class MajesticonsDivideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDivideLineIcon],svg[majesticons-divide-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 12h14"></svg:path><svg:circle cx="12" cy="6" r="2"></svg:circle><svg:circle cx="12" cy="18" r="2"></svg:circle></svg:g>`,
})
export class MajesticonsDivideLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDocumentIcon],svg[majesticons-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 21H5c-1.126 0-1.926-.491-2.412-1.166A3.23 3.23 0 0 1 2 18V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v5h3a1 1 0 0 1 1 1v6c0 .493-.14 1.211-.588 1.834C20.925 20.51 20.125 21 19 21m1-7a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsDocumentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDocumentAwardIcon],svg[majesticons-document-award-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 21h14c1.126 0 1.926-.491 2.412-1.166c.448-.623.588-1.34.588-1.834v-6a1 1 0 0 0-1-1h-3V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v12c0 .493.14 1.211.588 1.834C3.074 20.51 3.874 21 5 21m14-8a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1M9 10a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-3 8a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsDocumentAwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDocumentAwardLineIcon],svg[majesticons-document-award-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 20H5c-1.6 0-2-1.333-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6m2 8c-.667 0-2-.4-2-2v-6m2 8c1.6 0 2-1.333 2-2v-6h-4"></svg:path><svg:path d="M7 16h6m-1-6a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class MajesticonsDocumentAwardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDocumentLineIcon],svg[majesticons-document-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5c-1.6 0-2-1.333-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6m2 8c-.667 0-2-.4-2-2v-6m2 8c1.6 0 2-1.333 2-2v-6h-4"></svg:path>`,
})
export class MajesticonsDocumentLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDollarCircleIcon],svg[majesticons-dollar-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m12-6a1 1 0 1 0-2 0v1a3 3 0 0 0 0 6h2a1 1 0 1 1 0 2H9a1 1 0 1 0 0 2h2v1a1 1 0 1 0 2 0v-1a3 3 0 1 0 0-6h-2a1 1 0 1 1 0-2h4a1 1 0 1 0 0-2h-2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsDollarCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDollarCircleLineIcon],svg[majesticons-dollar-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M15 8h-3m-3 8h3m0 0h1a2 2 0 0 0 2-2v0a2 2 0 0 0-2-2h-2a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2h1m0 8v2m0-10V6"></svg:path></svg:g>`,
})
export class MajesticonsDollarCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDoorEnterIcon],svg[majesticons-door-enter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M10.138 1.815A3 3 0 0 1 14 4.688v14.624a3 3 0 0 1-3.862 2.873l-6-1.8A3 3 0 0 1 2 17.512V6.488a3 3 0 0 1 2.138-2.873zM15 4a1 1 0 0 1 1-1h3a3 3 0 0 1 3 3v1a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1h-3a1 1 0 0 1-1-1m6 12a1 1 0 0 1 1 1v1a3 3 0 0 1-3 3h-3a1 1 0 1 1 0-2h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1M9 11a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12h-5m0 0l2-2m-2 2l2 2"></svg:path></svg:g>`,
})
export class MajesticonsDoorEnterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDoorEnterLineIcon],svg[majesticons-door-enter-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4h3a2 2 0 0 1 2 2v1m-5 13h3a2 2 0 0 0 2-2v-1M4.425 19.428l6 1.8A2 2 0 0 0 13 19.312V4.688a2 2 0 0 0-2.575-1.916l-6 1.8A2 2 0 0 0 3 6.488v11.024a2 2 0 0 0 1.425 1.916M21.001 12h-5m0 0l2-2m-2 2l2 2"></svg:path>`,
})
export class MajesticonsDoorEnterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDoorExitIcon],svg[majesticons-door-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M10.138 1.815A3 3 0 0 1 14 4.688v14.624a3 3 0 0 1-3.862 2.873l-6-1.8A3 3 0 0 1 2 17.512V6.488a3 3 0 0 1 2.138-2.873zM15 4a1 1 0 0 1 1-1h3a3 3 0 0 1 3 3v1a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1h-3a1 1 0 0 1-1-1m6 12a1 1 0 0 1 1 1v1a3 3 0 0 1-3 3h-3a1 1 0 1 1 0-2h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1M9 11a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12h5m0 0l-2-2m2 2l-2 2"></svg:path></svg:g>`,
})
export class MajesticonsDoorExitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDoorExitLineIcon],svg[majesticons-door-exit-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4h3a2 2 0 0 1 2 2v1m-5 13h3a2 2 0 0 0 2-2v-1M4.425 19.428l6 1.8A2 2 0 0 0 13 19.312V4.688a2 2 0 0 0-2.575-1.916l-6 1.8A2 2 0 0 0 3 6.488v11.024a2 2 0 0 0 1.425 1.916M16.001 12h5m0 0l-2-2m2 2l-2 2"></svg:path>`,
})
export class MajesticonsDoorExitLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDotsCircleIcon],svg[majesticons-dots-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm5.5 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3zm3-1.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0zm4.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsDotsCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDotsCircleLineIcon],svg[majesticons-dots-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm0 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4zm3 2a2 2 0 1 1 4 0a2 2 0 0 1-4 0zm-8-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4z"></svg:path></svg:g>`,
})
export class MajesticonsDotsCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDotsHorizontalIcon],svg[majesticons-dots-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M5 10a2 2 0 1 0 0 4a2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsDotsHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDotsHorizontalLineIcon],svg[majesticons-dots-horizontal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 12a3 3 0 1 1 6 0a3 3 0 0 1-6 0zm3-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm4 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0zm3-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm7-2a3 3 0 1 0 0 6a3 3 0 0 0 0-6zm-1 3a1 1 0 1 1 2 0a1 1 0 0 1-2 0z"></svg:path></svg:g>`,
})
export class MajesticonsDotsHorizontalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDotsVerticalIcon],svg[majesticons-dots-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M10 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0zm0 7a2 2 0 1 0 4 0a2 2 0 0 0-4 0zm0 7a2 2 0 1 0 4 0a2 2 0 0 0-4 0z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsDotsVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDotsVerticalLineIcon],svg[majesticons-dots-vertical-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 5a3 3 0 1 0 6 0a3 3 0 0 0-6 0zm3 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0 9a3 3 0 1 1 0-6a3 3 0 0 1 0 6zm-1-3a1 1 0 1 0 2 0a1 1 0 0 0-2 0zm1 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6zm-1-3a1 1 0 1 0 2 0a1 1 0 0 0-2 0z"></svg:path></svg:g>`,
})
export class MajesticonsDotsVerticalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDuplicateIcon],svg[majesticons-duplicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M16 6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h1v-4.5c0-1.763.746-2.913 1.708-3.606C9.644 7.22 10.753 7 11.5 7H16V6zm.5 2h-5c-.587 0-1.478.18-2.208.706C8.588 9.213 8 10.063 8 11.5V18a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-6a4 4 0 0 0-4-4h-1.5z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsDuplicateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsDuplicateLineIcon],svg[majesticons-duplicate-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h2v2a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-6a4 4 0 0 0-4-4h-2V6zm-2 2h-2a4 4 0 0 0-4 4v2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2zm4 2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h6z"></svg:path></svg:g>`,
})
export class MajesticonsDuplicateLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsEarthSphereIcon],svg[majesticons-earth-sphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 12a10 10 0 0 1-.832 4M12 22a9.97 9.97 0 0 0 7.071-2.929M2 12a9.97 9.97 0 0 1 2.929-7.071M12 2a10 10 0 0 0-4 .832m0 18.336A10.02 10.02 0 0 1 2.832 16m13-13A10.02 10.02 0 0 1 21 8.168"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.06 5.646A7 7 0 0 1 12 5a7 7 0 0 1 6.184 3.718l-2.015.671a3 3 0 0 0-1.851 3.923l1.7 4.42A6.97 6.97 0 0 1 12 19a7 7 0 0 1-2.519-.467l1.564-1.369a2.44 2.44 0 0 0-.515-4.017a.44.44 0 0 1-.067-.744l.473-.355a2.804 2.804 0 0 0 .3-4.226zm-1.708 1.12A6.98 6.98 0 0 0 5 12c0 2.221 1.035 4.2 2.646 5.481l2.082-1.822a.44.44 0 0 0-.093-.723c-1.621-.811-1.823-3.045-.372-4.133l.473-.355a.804.804 0 0 0 .086-1.212zm10.23 9.46A6.97 6.97 0 0 0 19 12q-.001-.72-.14-1.4l-2.058.687a1 1 0 0 0-.617 1.307l1.396 3.632z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsEarthSphereIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsEarthSphereLineIcon],svg[majesticons-earth-sphere-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 12a10 10 0 0 1-.832 4M12 22a9.97 9.97 0 0 0 7.071-2.929M2 12a9.97 9.97 0 0 1 2.929-7.071M12 2a10 10 0 0 0-4 .832m0 18.336A10.02 10.02 0 0 1 2.832 16m13-13A10.02 10.02 0 0 1 21 8.168M9 6.803A6 6 0 0 0 6 12c0 2.22 1.207 4.16 3 5.197M9 6.803A6.003 6.003 0 0 1 17.659 10M9 6.803l1.603 1.708a1.83 1.83 0 0 1-.236 2.714l-.59.442a1.373 1.373 0 0 0 .21 2.327v0c.92.46 1.027 1.729.198 2.336L9 17.197m0 0c.883.51 1.907.803 3 .803c1.792 0 3.4-.786 4.5-2.031M17.659 10A6 6 0 0 1 18 12a5.98 5.98 0 0 1-1.5 3.969M17.659 10l-1.101.349a2 2 0 0 0-1.252 2.653L16.5 15.97"></svg:path>`,
})
export class MajesticonsEarthSphereLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsEditPen2Icon],svg[majesticons-edit-pen-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.586 3a2 2 0 0 1 2.828 0L21 5.586a2 2 0 0 1 0 2.828L19.414 10L14 4.586zm-3 3l-9 9A2 2 0 0 0 3 16.414V19a2 2 0 0 0 2 2h2.586A2 2 0 0 0 9 20.414l9-9z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsEditPen2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsEditPen2LineIcon],svg[majesticons-edit-pen-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 6l2.293-2.293a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414L18 10m-4-4l-9.707 9.707a1 1 0 0 0-.293.707V19a1 1 0 0 0 1 1h2.586a1 1 0 0 0 .707-.293L18 10m-4-4l4 4"></svg:path>`,
})
export class MajesticonsEditPen2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsEditPen4Icon],svg[majesticons-edit-pen-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M17.586 2a2 2 0 0 1 2.828 0L22 3.586a2 2 0 0 1 0 2.828L20.414 8L16 3.586zm-3 3l-5 5A2 2 0 0 0 9 11.414V13a2 2 0 0 0 2 2h1.586A2 2 0 0 0 14 14.414l5-5z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 14H5a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h14a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-4"></svg:path></svg:g>`,
})
export class MajesticonsEditPen4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsEditPen4LineIcon],svg[majesticons-edit-pen-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 5l2.293-2.293a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414L19 8m-3-3l-5.707 5.707a1 1 0 0 0-.293.707V13a1 1 0 0 0 1 1h1.586a1 1 0 0 0 .707-.293L19 8m-3-3l3 3M6 14H5a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h14a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-4"></svg:path>`,
})
export class MajesticonsEditPen4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsEjectIcon],svg[majesticons-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m5 15l7-10l7 10z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19h14M12 5L5 15h14z"></svg:path></svg:g>`,
})
export class MajesticonsEjectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsEjectLineIcon],svg[majesticons-eject-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19h14M12 5L5 15h14z"></svg:path>`,
})
export class MajesticonsEjectLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsEmojiHappyIcon],svg[majesticons-emoji-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm7-1a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm.757 2.1a1 1 0 0 0-1.514 1.307C9.053 15.344 10.283 16 12 16c1.716 0 2.947-.656 3.757-1.593a1 1 0 1 0-1.514-1.307c-.419.485-1.091.9-2.243.9s-1.824-.415-2.243-.9zM16 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsEmojiHappyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsEmojiHappyLineIcon],svg[majesticons-emoji-happy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zM9.757 13.1a1 1 0 1 0-1.514 1.307C9.053 15.344 10.283 16 12 16c1.716 0 2.947-.656 3.757-1.593a1 1 0 0 0-1.514-1.307c-.419.485-1.091.9-2.243.9s-1.824-.415-2.243-.9zM8 10a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1zm7-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H15z"></svg:path></svg:g>`,
})
export class MajesticonsEmojiHappyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsEmojiSadIcon],svg[majesticons-emoji-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm7-1a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm.757 4.654a1 1 0 1 1-1.514-1.308c.81-.937 2.04-1.592 3.757-1.592c1.716 0 2.947.655 3.757 1.592a1 1 0 0 1-1.514 1.308c-.419-.485-1.091-.9-2.243-.9s-1.824.415-2.243.9zM16 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsEmojiSadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsEmojiSadLineIcon],svg[majesticons-emoji-sad-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zM9.757 15.654a1 1 0 1 1-1.514-1.308c.81-.937 2.04-1.592 3.757-1.592c1.716 0 2.947.655 3.757 1.592a1 1 0 1 1-1.514 1.308c-.419-.485-1.091-.9-2.243-.9s-1.824.415-2.243.9zM8 10a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1zm7-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H15z"></svg:path></svg:g>`,
})
export class MajesticonsEmojiSadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsEraserIcon],svg[majesticons-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.121 17.85a3 3 0 0 1 0-4.243l7.071-7.072l8.486 8.486l-3.243 3.242H20a1 1 0 1 1 0 2H6.778a3 3 0 0 1-2.121-.878L3.12 17.849zm16.97-4.243l1.415-1.415a3 3 0 0 0 0-4.242l-4.243-4.243a3 3 0 0 0-4.242 0l-1.414 1.414z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsEraserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsEraserLineIcon],svg[majesticons-eraser-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#majesticonsEraserLine0)"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11.607 6.535l-7.779 7.779a2 2 0 0 0 0 2.828l1.536 1.536a2 2 0 0 0 1.414.585h6.243M11.607 6.535l2.12-2.12a2 2 0 0 1 2.83 0l4.242 4.242a2 2 0 0 1 0 2.828l-2.121 2.122m-7.071-7.072l7.07 7.072m0 0l-5.656 5.656m0 0H20"></svg:path></svg:g><svg:defs><svg:clippath id="majesticonsEraserLine0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class MajesticonsEraserLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsEtheriumCircleIcon],svg[majesticons-etherium-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m11.814-7.581a1 1 0 0 0-1.628 0l-5 7a1 1 0 0 0 0 1.162l5 7a1 1 0 0 0 1.628 0l5-7a1 1 0 0 0 0-1.162zM12 12.923L9.693 12L12 11.077l2.307.923zm.371 2.005l1.832-.732L12 17.279l-2.203-3.083l1.832.732a1 1 0 0 0 .742 0M12 6.72L9.797 9.804l1.832-.732a1 1 0 0 1 .742 0l1.832.732z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsEtheriumCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsEtheriumCircleLineIcon],svg[majesticons-etherium-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="m7 12l5-7l5 7M7 12l5 7l5-7M7 12l5-2l5 2M7 12l5 2l5-2"></svg:path></svg:g>`,
})
export class MajesticonsEtheriumCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsEuroCircleIcon],svg[majesticons-euro-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m8 0q0-.255.031-.5H12a1 1 0 1 0 0-2H9.877A4 4 0 0 1 13 8c.902 0 1.731.297 2.4.8a1 1 0 0 0 1.2-1.6a6 6 0 0 0-9.057 2.3H7a1 1 0 0 0 0 2h.02a6 6 0 0 0 0 1H7a1 1 0 1 0 0 2h.544a6 6 0 0 0 9.057 2.3a1 1 0 0 0-1.201-1.6c-.669.503-1.498.8-2.4.8a4 4 0 0 1-3.123-1.5H12a1 1 0 1 0 0-2H9.031A4 4 0 0 1 9 12" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsEuroCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsEuroCircleLineIcon],svg[majesticons-euro-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M16 8a5 5 0 1 0 0 8m-9-5.5h5m0 3H7"></svg:path></svg:g>`,
})
export class MajesticonsEuroCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsExclamationIcon],svg[majesticons-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M9.378 4.661c1.143-2.057 4.101-2.057 5.245 0l6.6 11.882c1.111 2-.335 4.457-2.622 4.457H5.399c-2.287 0-3.733-2.457-2.622-4.457l6.6-11.882zM12 8a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zm1 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsExclamationCircleIcon],svg[majesticons-exclamation-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm10-5a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm1 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsExclamationCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsExclamationCircleLineIcon],svg[majesticons-exclamation-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm10-5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm0 8a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12z"></svg:path></svg:g>`,
})
export class MajesticonsExclamationCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsExclamationLineIcon],svg[majesticons-exclamation-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.126 5.633a1 1 0 0 1 1.748 0l6.601 11.881A1 1 0 0 1 18.601 19H5.399a1 1 0 0 1-.874-1.486l6.6-11.881zm3.497-.972c-1.143-2.057-4.102-2.057-5.245 0L2.777 16.543C1.666 18.543 3.112 21 5.399 21h13.202c2.287 0 3.733-2.457 2.622-4.457l-6.6-11.882zM12 8a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zm-1 8a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class MajesticonsExclamationLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsExternalLinkIcon],svg[majesticons-external-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6zm10-1a1 1 0 1 0 0 2h2.586l-4.293 4.293a1 1 0 0 0 1.414 1.414L17 8.414V11a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1h-5z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsExternalLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsExternalLinkLineIcon],svg[majesticons-external-link-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 6a1 1 0 0 1 1-1h4a1 1 0 1 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-4a1 1 0 1 0-2 0v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6zm10-3a1 1 0 1 0 0 2h2.586l-6.293 6.293a1 1 0 0 0 1.414 1.414L19 6.414V9a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-5z"></svg:path></svg:g>`,
})
export class MajesticonsExternalLinkLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsEyeIcon],svg[majesticons-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.19 7.262C5.94 5.577 8.517 4 12 4s6.06 1.577 7.81 3.262a15.1 15.1 0 0 1 3.001 4.11c.193.399.193.857 0 1.255a15.1 15.1 0 0 1-3 4.111C18.06 18.423 15.483 20 12 20s-6.06-1.577-7.81-3.262a15.1 15.1 0 0 1-3.001-4.11a1.44 1.44 0 0 1 0-1.255a15.1 15.1 0 0 1 3-4.111zM12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsEyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsEyeLineIcon],svg[majesticons-eye-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 5c-6.307 0-9.367 5.683-9.91 6.808a.44.44 0 0 0 0 .384C2.632 13.317 5.692 19 12 19s9.367-5.683 9.91-6.808a.44.44 0 0 0 0-.384C21.368 10.683 18.308 5 12 5"></svg:path><svg:circle cx="12" cy="12" r="3"></svg:circle></svg:g>`,
})
export class MajesticonsEyeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsEyeOffIcon],svg[majesticons-eye-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 3l18 18"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 6.23c-.44.33-.843.678-1.21 1.032a15.1 15.1 0 0 0-3.001 4.11a1.44 1.44 0 0 0 0 1.255a15.1 15.1 0 0 0 3 4.111C5.94 18.423 8.518 20 12 20c2.236 0 4.1-.65 5.61-1.562l-3.944-3.943a3 3 0 0 1-4.161-4.161L5.401 6.229zm15.266 9.608a15 15 0 0 0 2.145-3.21a1.44 1.44 0 0 0 0-1.255a15.1 15.1 0 0 0-3-4.111C18.06 5.577 15.483 4 12 4a10.8 10.8 0 0 0-2.808.363z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsEyeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsEyeOffLineIcon],svg[majesticons-eye-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6.362A9.7 9.7 0 0 1 12 5c6.307 0 9.367 5.683 9.91 6.808c.06.123.06.261 0 .385c-.352.728-1.756 3.362-4.41 5.131M14 18.8a10 10 0 0 1-2 .2c-6.307 0-9.367-5.683-9.91-6.808a.44.44 0 0 1 0-.386c.219-.452.84-1.632 1.91-2.885m6 .843A3 3 0 0 1 14.236 14M3 3l18 18"></svg:path>`,
})
export class MajesticonsEyeOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFastForwardIcon],svg[majesticons-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M21.067 10.8l-6.667-5C13.411 5.058 12 5.764 12 7v3L6.4 5.8C5.411 5.058 4 5.764 4 7v10c0 1.236 1.411 1.942 2.4 1.2L12 14v3c0 1.236 1.411 1.942 2.4 1.2l6.667-5c.8-.6.8-1.8 0-2.4z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsFastForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFastForwardLineIcon],svg[majesticons-fast-forward-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 8v8l5.333-4L14 8zm-2-1c0-1.236 1.411-1.942 2.4-1.2l6.667 5c.8.6.8 1.8 0 2.4l-6.667 5c-.989.742-2.4.036-2.4-1.2v-3l-5.6 4.2c-.989.742-2.4.036-2.4-1.2V7c0-1.236 1.411-1.942 2.4-1.2L12 10V7zm-.667 5L6 8v8l5.333-4z"></svg:path></svg:g>`,
})
export class MajesticonsFastForwardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFerrisWheelIcon],svg[majesticons-ferris-wheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="6"></svg:circle><svg:circle cx="12" cy="4" r="2" fill="currentColor"></svg:circle><svg:circle cx="19" cy="8" r="2" fill="currentColor"></svg:circle><svg:circle cx="5" cy="8" r="2" fill="currentColor"></svg:circle><svg:circle cx="5" cy="16" r="2" fill="currentColor"></svg:circle><svg:circle cx="19" cy="16" r="2" fill="currentColor"></svg:circle><svg:path d="m8 22l4-10l4 10"></svg:path></svg:g>`,
})
export class MajesticonsFerrisWheelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFerrisWheelLineIcon],svg[majesticons-ferris-wheel-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="6"></svg:circle><svg:circle cx="12" cy="4" r="2"></svg:circle><svg:circle cx="19" cy="8" r="2"></svg:circle><svg:circle cx="5" cy="8" r="2"></svg:circle><svg:circle cx="5" cy="16" r="2"></svg:circle><svg:circle cx="19" cy="16" r="2"></svg:circle><svg:path d="m8 22l4-10l4 10"></svg:path></svg:g>`,
})
export class MajesticonsFerrisWheelLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFileIcon],svg[majesticons-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8h-6a3 3 0 0 1-3-3zm9 7v-.172a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 14.172 2H14v6a1 1 0 0 0 1 1z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFileAddIcon],svg[majesticons-file-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M3 19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 14.172 2H6a3 3 0 0 0-3 3v14zm10-7a1 1 0 1 0-2 0v2H9a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsFileAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFileAddLineIcon],svg[majesticons-file-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M3 19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 14.172 2H6a3 3 0 0 0-3 3v14zm3 1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7v3a3 3 0 0 0 3 3h3v9a1 1 0 0 1-1 1H6zM18.586 8H16a1 1 0 0 1-1-1V4.414L18.586 8z"></svg:path><svg:path d="M12 11a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1z"></svg:path></svg:g>`,
})
export class MajesticonsFileAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFileDownloadIcon],svg[majesticons-file-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M3 19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 14.172 2H6a3 3 0 0 0-3 3v14zm10-7a1 1 0 1 0-2 0v3.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L13 15.586V12z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsFileDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFileDownloadLineIcon],svg[majesticons-file-download-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M3 19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 14.172 2H6a3 3 0 0 0-3 3v14zm3 1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7v3a3 3 0 0 0 3 3h3v9a1 1 0 0 1-1 1H6zM18.586 8H16a1 1 0 0 1-1-1V4.414L18.586 8z"></svg:path><svg:path d="M12 11a1 1 0 0 1 1 1v3.586l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L11 15.586V12a1 1 0 0 1 1-1z"></svg:path></svg:g>`,
})
export class MajesticonsFileDownloadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFileDuplicateIcon],svg[majesticons-file-duplicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M16.83 20H8a3 3 0 0 1-3-3V6.17A3.001 3.001 0 0 0 3 9v10a3 3 0 0 0 3 3h8a3.001 3.001 0 0 0 2.83-2zM7 5v12a1 1 0 0 0 1 1h10a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 14.172 2H10a3 3 0 0 0-3 3z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsFileDuplicateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFileDuplicateLineIcon],svg[majesticons-file-duplicate-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8.828a1 1 0 0 0-.293-.707L14.88 4.293A1 1 0 0 0 14.172 4H10zM7 5a3 3 0 0 1 3-3h4.172a3 3 0 0 1 2.12.879l3.83 3.828A3 3 0 0 1 21 8.828V15a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3V5z"></svg:path><svg:path d="M3 9a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2H6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2a1 1 0 1 1 2 0v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9zm11-7a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h4a1 1 0 1 1 0 2h-4a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1z"></svg:path></svg:g>`,
})
export class MajesticonsFileDuplicateLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFileLineIcon],svg[majesticons-file-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 9v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8m6 6v-.172a2 2 0 0 0-.586-1.414l-3.828-3.828A2 2 0 0 0 14.172 3H14m6 6h-4a2 2 0 0 1-2-2V3"></svg:path>`,
})
export class MajesticonsFileLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFileMinusIcon],svg[majesticons-file-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 19h-6"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6 2h6v6a3 3 0 0 0 3 3h6v2.803A6 6 0 0 0 12.803 22H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m15 6.828V9h-6a1 1 0 0 1-1-1V2h.172a3 3 0 0 1 2.12.879l3.83 3.828A3 3 0 0 1 21 8.828" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsFileMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFileMinusLineIcon],svg[majesticons-file-minus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 19h-6m5-10v-.172a2 2 0 0 0-.586-1.414l-3.828-3.828A2 2 0 0 0 14.172 3H14m6 6h-4a2 2 0 0 1-2-2V3m6 6v3m-6-9H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"></svg:path>`,
})
export class MajesticonsFileMinusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFilePlusIcon],svg[majesticons-file-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 16v3m0 0v3m0-3h3m-3 0h-3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6 2h6v6a3 3 0 0 0 3 3h6v2.341A6 6 0 0 0 13.803 22H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m15 6.828V9h-6a1 1 0 0 1-1-1V2h.172a3 3 0 0 1 2.12.879l3.83 3.828A3 3 0 0 1 21 8.828" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsFilePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFilePlusLineIcon],svg[majesticons-file-plus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 16v3m0 0v3m0-3h3m-3 0h-3m4-10v-.172a2 2 0 0 0-.586-1.414l-3.828-3.828A2 2 0 0 0 14.172 3H14m6 6h-4a2 2 0 0 1-2-2V3m6 6v3m-6-9H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"></svg:path>`,
})
export class MajesticonsFilePlusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFileRemoveIcon],svg[majesticons-file-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M3 19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 14.172 2H6a3 3 0 0 0-3 3v14zm6-5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsFileRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFileRemoveLineIcon],svg[majesticons-file-remove-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 22a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8.172a3 3 0 0 1 2.12.879l3.83 3.828A3 3 0 0 1 21 8.828V19a3 3 0 0 1-3 3H6zm-1-3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9h-3a3 3 0 0 1-3-3V4H6a1 1 0 0 0-1 1v14zM16 8h2.586L15 4.414V7a1 1 0 0 0 1 1zm-7 6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9z"></svg:path></svg:g>`,
})
export class MajesticonsFileRemoveLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFileReportIcon],svg[majesticons-file-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M3 19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 14.172 2H6a3 3 0 0 0-3 3v14zm14-8a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0v-6zm-4 2a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4zm-4 1.995a1 1 0 0 0-2 .01l.01 2a1 1 0 0 0 2-.01l-.01-2z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsFileReportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFileReportLineIcon],svg[majesticons-file-report-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 22a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8.172a3 3 0 0 1 2.12.879l3.83 3.828A3 3 0 0 1 21 8.828V19a3 3 0 0 1-3 3H6zm-1-3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9h-3a3 3 0 0 1-3-3V4H6a1 1 0 0 0-1 1v14zM16 8h2.586L15 4.414V7a1 1 0 0 0 1 1zm0 5a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4zm-3 2a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2zm-4 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H9z"></svg:path></svg:g>`,
})
export class MajesticonsFileReportLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFileSearchIcon],svg[majesticons-file-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M3 19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 14.172 2H6a3 3 0 0 0-3 3v14zm7-4.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0zm1.5-3.5a3.5 3.5 0 1 0 1.665 6.58l1.128 1.127a1 1 0 0 0 1.414-1.414l-1.128-1.128A3.5 3.5 0 0 0 11.5 11z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsFileSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFileSearchLineIcon],svg[majesticons-file-search-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 22a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8.172a3 3 0 0 1 2.12.879l3.83 3.828A3 3 0 0 1 21 8.828V19a3 3 0 0 1-3 3H6zm-1-3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9h-3a3 3 0 0 1-3-3V4H6a1 1 0 0 0-1 1v14zM16 8h2.586L15 4.414V7a1 1 0 0 0 1 1zm-6 6.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0zm1.5-3.5a3.5 3.5 0 1 0 1.665 6.58l1.128 1.127a1 1 0 0 0 1.414-1.414l-1.128-1.128A3.5 3.5 0 0 0 11.5 11z"></svg:path></svg:g>`,
})
export class MajesticonsFileSearchLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFileTextIcon],svg[majesticons-file-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M3 19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 14.172 2H6a3 3 0 0 0-3 3v14zm5-7a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H8z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsFileTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFileTextLineIcon],svg[majesticons-file-text-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 22a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8.172a3 3 0 0 1 2.12.879l3.83 3.828A3 3 0 0 1 21 8.828V19a3 3 0 0 1-3 3H6zm-1-3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9h-3a3 3 0 0 1-3-3V4H6a1 1 0 0 0-1 1v14zM16 8h2.586L15 4.414V7a1 1 0 0 0 1 1zm-8 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H8z"></svg:path></svg:g>`,
})
export class MajesticonsFileTextLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFilmIcon],svg[majesticons-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6zM5 6a1 1 0 0 1 1-1h1v2H5V6zm14 0v1h-2V5h1a1 1 0 0 1 1 1zm-2 5V9h2v2h-2zm0 4v-2h2v2h-2zm1 4h-1v-2h2v1a1 1 0 0 1-1 1zM5 18v-1h2v2H6a1 1 0 0 1-1-1zm2-3H5v-2h2v2zm0-4H5V9h2v2z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsFilmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFilmLineIcon],svg[majesticons-film-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6zm3-1a1 1 0 0 0-1 1v1h2V5H6zm3 0v6h6V5H9zm8 0v2h2V6a1 1 0 0 0-1-1h-1zm2 4h-2v2h2V9zm0 4h-2v2h2v-2zm0 4h-2v2h1a1 1 0 0 0 1-1v-1zm-4 2v-6H9v6h6zm-8 0v-2H5v1a1 1 0 0 0 1 1h1zm-2-4h2v-2H5v2zm0-4h2V9H5v2z"></svg:path></svg:g>`,
})
export class MajesticonsFilmLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFilterIcon],svg[majesticons-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="2" d="M18 4H6c-1.105 0-2.026.91-1.753 1.98a8.02 8.02 0 0 0 4.298 5.238c.823.394 1.455 1.168 1.455 2.08v6.084a1 1 0 0 0 1.447.894l2-1a1 1 0 0 0 .553-.894v-5.084c0-.912.632-1.686 1.454-2.08a8.02 8.02 0 0 0 4.3-5.238C20.025 4.91 19.103 4 18 4z"></svg:path>`,
})
export class MajesticonsFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFilterLineIcon],svg[majesticons-filter-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M18 4H6c-1.105 0-2.026.91-1.753 1.98a8.02 8.02 0 0 0 4.298 5.238c.823.394 1.455 1.168 1.455 2.08v6.084a1 1 0 0 0 1.447.894l2-1a1 1 0 0 0 .553-.894v-5.084c0-.912.632-1.686 1.454-2.08a8.02 8.02 0 0 0 4.3-5.238C20.025 4.91 19.103 4 18 4z"></svg:path>`,
})
export class MajesticonsFilterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFireIcon],svg[majesticons-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M11.445 2.168a1 1 0 0 1 1.325.194c.468.565 1.852 1.93 3.447 2.687A8.998 8.998 0 0 1 21 13A9 9 0 1 1 5.4 6.882a1 1 0 0 1 1.644.267c.127.282.471.663.992 1.066l.083.064c.2-1.41.632-2.592 1.145-3.538c.686-1.268 1.53-2.139 2.181-2.573zm.476 8.017a1 1 0 0 1 1.369.202c.042.054.158.186.323.334a2.536 2.536 0 0 0 .57.396c1.1.633 1.817 1.85 1.817 3.216C16 16.297 14.493 18 12.5 18S9 16.297 9 14.333c0-.943.341-1.812.912-2.469a1 1 0 0 1 .994-.314c.039-.092.08-.18.122-.264c.253-.498.582-.88.893-1.101z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsFireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFireLineIcon],svg[majesticons-fire-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.77 2.362a1 1 0 0 0-1.325-.194c-.65.434-1.495 1.305-2.181 2.573a10.504 10.504 0 0 0-1.145 3.538a7.593 7.593 0 0 1-.083-.064c-.52-.403-.865-.784-.992-1.066A1 1 0 0 0 5.4 6.882a9 9 0 1 0 10.817-1.833c-1.595-.756-2.98-2.122-3.447-2.687zm-1.748 3.33c.3-.553.623-.984.91-1.3c.789.774 2.008 1.786 3.404 2.452a7 7 0 1 1-9.214 2.354c.225.223.463.423.688.598c.613.475 1.27.863 1.743 1.099A1 1 0 0 0 10 10c0-1.845.465-3.277 1.022-4.307zm2.268 4.695a1 1 0 0 0-1.37-.202c-.31.22-.639.603-.892 1.101a4.017 4.017 0 0 0-.122.264a1 1 0 0 0-.994.315A3.756 3.756 0 0 0 9 14.332C9 16.297 10.507 18 12.5 18s3.5-1.703 3.5-3.667c0-1.366-.717-2.583-1.818-3.216a2.54 2.54 0 0 1-.57-.396a2.895 2.895 0 0 1-.322-.334zM11 14.333c0-.055.002-.11.007-.164l.085.047a1 1 0 0 0 1.47-.883c0-.318.047-.584.113-.8c.163.119.34.232.529.329c.457.271.796.814.796 1.471c0 .983-.731 1.667-1.5 1.667s-1.5-.684-1.5-1.667z"></svg:path></svg:g>`,
})
export class MajesticonsFireLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFishIcon],svg[majesticons-fish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.346 6.005A13 13 0 0 0 14 6c-3.633 0-7.031 2.294-9.46 4.574a21 21 0 0 1-1.716-2.14a1 1 0 1 0-1.648 1.133A23 23 0 0 0 3.133 12c-.813.89-1.48 1.74-1.957 2.434a1 1 0 1 0 1.648 1.133c.41-.596.994-1.345 1.716-2.141C6.97 15.706 10.367 18 14 18q.185 0 .365-.005a11 11 0 0 1-.592-1.732a19 19 0 0 1-.545-3.332c-.167-2.218.022-4.825 1.118-6.926m2.122 11.742q.135-.03.269-.062c2.017-.492 3.559-1.843 4.562-2.985a13.7 13.7 0 0 0 1.47-2.029q.054-.091.082-.143l.023-.042l.007-.013l.002-.004v-.001l.001-.001l-.787-.416l.787.415l.247-.466l-.247-.466l-.787.415l.787-.416l-.001-.002l-.002-.005l-.007-.012l-.023-.042a11 11 0 0 0-.387-.637A14 14 0 0 0 21.3 9.3c-1.003-1.142-2.546-2.493-4.562-2.985l-.27-.062a1 1 0 0 1-.12.278c-1.033 1.648-1.294 4.005-1.125 6.25a17 17 0 0 0 .486 2.978c.226.867.47 1.447.632 1.698q.088.139.128.29zm-5.26-7.04a1 1 0 0 0-1.415-1.414c-.272.271-.47.662-.606 1.015a5.4 5.4 0 0 0-.318 1.32c-.104.928.016 2.172.924 3.08a1 1 0 0 0 1.414-1.415c-.292-.293-.422-.8-.35-1.445c.033-.306.11-.594.197-.822c.073-.19.134-.286.152-.313q.01-.014.001-.006zM17 11a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H18a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsFishIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFishLineIcon],svg[majesticons-fish-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M2 15c1.833-2.667 6.8-8 12-8c.923 0 1.754.105 2.5.287M2 9c1.833 2.667 6.8 8 12 8c.923 0 1.754-.105 2.5-.287m0 0C19.96 15.87 22 12 22 12s-2.04-3.87-5.5-4.713m0 9.426c-1-1.546-2.4-5.597 0-9.426M12 10.5c-.5.5-1.2 1.8 0 3m6-2.5h.001"></svg:path>`,
})
export class MajesticonsFishLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFlagIcon],svg[majesticons-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M19 5H5v9h14z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 20v-6m0-9h14v9H5m0-9v9m0-9V4"></svg:path></svg:g>`,
})
export class MajesticonsFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFlagLineIcon],svg[majesticons-flag-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 20v-6m0-9h14v9H5m0-9v9m0-9V4"></svg:path>`,
})
export class MajesticonsFlagLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFlaskIcon],svg[majesticons-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M14 8.46V3h-4v5.46a2 2 0 0 1-.272 1.007L8.25 12l-3.495 5.992C3.977 19.326 4.938 21 6.482 21h11.036c1.543 0 2.505-1.674 1.727-3.008L15.75 12l-1.478-2.533A2 2 0 0 1 14 8.459z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3h2m6 0h-2m0 0v5.46a2 2 0 0 0 .272 1.007L15.75 12l3.495 5.992c.778 1.334-.184 3.008-1.727 3.008H6.482c-1.544 0-2.505-1.674-1.727-3.008L8.25 12l1.478-2.533A2 2 0 0 0 10 8.459V3m4 0h-4"></svg:path></svg:g>`,
})
export class MajesticonsFlaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFlaskLineIcon],svg[majesticons-flask-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3h2m6 0h-2m0 0v5.46a2 2 0 0 0 .272 1.007L15.75 12l3.495 5.992c.778 1.334-.184 3.008-1.727 3.008H6.482c-1.544 0-2.505-1.674-1.727-3.008L8.25 12l1.478-2.533A2 2 0 0 0 10 8.459V3m4 0h-4"></svg:path>`,
})
export class MajesticonsFlaskLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFlower2Icon],svg[majesticons-flower-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 14c0 2.333 1.4 7 7 7c0-2.333-1.4-7-7-7m3-6V4l2.5 2L12 3l2.5 3L17 4v4c0 1.667-1 5-5 5S7 9.667 7 8m13 6c0 2.333-1.4 7-7 7c0-2.333 1.4-7 7-7"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 21c-5.6 0-7-4.667-7-7c5.6 0 7 4.667 7 7m0 0h1m0 0v-8m0 8h1m-1-8c-4 0-5-3.333-5-5V4l2.5 2L12 3l2.5 3L17 4v4c0 1.667-1 5-5 5m1 8c5.6 0 7-4.667 7-7c-5.6 0-7 4.667-7 7"></svg:path></svg:g>`,
})
export class MajesticonsFlower2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFlower2LineIcon],svg[majesticons-flower-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13c-4 0-5-3.333-5-5V4l2.5 2L12 3l2.5 3L17 4v4c0 1.667-1 5-5 5m0 0v8m1 0c5.6 0 7-4.667 7-7c-5.6 0-7 4.667-7 7m0 0h-1m-1 0c-5.6 0-7-4.667-7-7c5.6 0 7 4.667 7 7m0 0h1"></svg:path>`,
})
export class MajesticonsFlower2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFolderIcon],svg[majesticons-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6a2 2 0 0 1 2-2h3.93a2 2 0 0 1 1.664.89l.812 1.22A2 2 0 0 0 13.07 7H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path>`,
})
export class MajesticonsFolderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFolderAddIcon],svg[majesticons-folder-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 6a3 3 0 0 1 3-3h3.93a3 3 0 0 1 2.496 1.336l.812 1.219A1 1 0 0 0 13.07 6H19a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6zm11 5a1 1 0 1 0-2 0v2H9a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsFolderAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFolderAddLineIcon],svg[majesticons-folder-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 6a1 1 0 0 1 1-1h3.93a1 1 0 0 1 .832.445l.812 1.22A3 3 0 0 0 13.07 8H19a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6zm1-3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.93a1 1 0 0 1-.832-.445l-.812-1.22A3 3 0 0 0 8.93 3H5zm8 8a1 1 0 1 0-2 0v2H9a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2z"></svg:path></svg:g>`,
})
export class MajesticonsFolderAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFolderCheckIcon],svg[majesticons-folder-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M5 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7.174A6.5 6.5 0 0 1 21 12.498V9a2 2 0 0 0-2-2h-5.93a2 2 0 0 1-1.664-.89l-.812-1.22A2 2 0 0 0 8.93 4z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.174 20v1a1 1 0 0 0 .973-1.23zM21 12.498l-.385.923A1 1 0 0 0 22 12.498zM11.406 6.11l.832-.554zm-.812-1.218l-.832.554zM4 6a1 1 0 0 1 1-1V3a3 3 0 0 0-3 3zm0 12V6H2v12zm1 1a1 1 0 0 1-1-1H2a3 3 0 0 0 3 3zm7.174 0H5v2h7.174zm.973.77A5.5 5.5 0 0 1 13 18.5h-2c0 .594.07 1.174.2 1.73zM13 18.5a5.5 5.5 0 0 1 5.5-5.5v-2a7.5 7.5 0 0 0-7.5 7.5zm5.5-5.5c.752 0 1.465.15 2.115.421l.77-1.846A7.5 7.5 0 0 0 18.5 11zM20 9v3.498h2V9zm-1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zm-5.93 0H19V6h-5.93zm-2.496-1.336A3 3 0 0 0 13.07 8V6a1 1 0 0 1-.832-.445l-1.664 1.11zm-.812-1.219l.812 1.22l1.664-1.11l-.812-1.22zM8.93 5a1 1 0 0 1 .832.445l1.664-1.11A3 3 0 0 0 8.93 3zM5 5h3.93V3H5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 19l2 2l4-5"></svg:path></svg:g>`,
})
export class MajesticonsFolderCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFolderCheckLineIcon],svg[majesticons-folder-check-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 11.5V9a2 2 0 0 0-2-2h-5.93a2 2 0 0 1-1.664-.89l-.812-1.22A2 2 0 0 0 8.93 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7m4-1l2 2l4-5"></svg:path>`,
})
export class MajesticonsFolderCheckLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFolderDownloadIcon],svg[majesticons-folder-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 6a3 3 0 0 1 3-3h3.93a3 3 0 0 1 2.496 1.336l.812 1.219A1 1 0 0 0 13.07 6H19a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6zm11 5a1 1 0 1 0-2 0v3.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L13 14.586V11z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsFolderDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFolderDownloadLineIcon],svg[majesticons-folder-download-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 6a1 1 0 0 1 1-1h3.93a1 1 0 0 1 .832.445l.812 1.22A3 3 0 0 0 13.07 8H19a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6zm1-3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.93a1 1 0 0 1-.832-.445l-.812-1.22A3 3 0 0 0 8.93 3H5zm8 8a1 1 0 1 0-2 0v3.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L13 14.586V11z"></svg:path></svg:g>`,
})
export class MajesticonsFolderDownloadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFolderLineIcon],svg[majesticons-folder-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6a2 2 0 0 1 2-2h3.93a2 2 0 0 1 1.664.89l.812 1.22A2 2 0 0 0 13.07 7H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path>`,
})
export class MajesticonsFolderLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFolderMinusIcon],svg[majesticons-folder-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M5 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6.498A6.5 6.5 0 0 1 21 12.022V9a2 2 0 0 0-2-2h-5.93a2 2 0 0 1-1.664-.89l-.812-1.22A2 2 0 0 0 8.93 4z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11.498 20v1a1 1 0 0 0 .923-1.385zM21 12.022l-.54.842a1 1 0 0 0 1.54-.842zm-9.594-5.913l.832-.554zm-.812-1.218l-.832.554zM4 6a1 1 0 0 1 1-1V3a3 3 0 0 0-3 3zm0 12V6H2v12zm1 1a1 1 0 0 1-1-1H2a3 3 0 0 0 3 3zm6.498 0H5v2h6.498zm.923.615A5.5 5.5 0 0 1 12 17.5h-2c0 1.02.204 1.995.575 2.885zM12 17.5a5.5 5.5 0 0 1 5.5-5.5v-2a7.5 7.5 0 0 0-7.5 7.5zm5.5-5.5a5.47 5.47 0 0 1 2.96.864l1.08-1.684A7.47 7.47 0 0 0 17.5 10zM20 9v3.022h2V9zm-1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zm-5.93 0H19V6h-5.93zm-2.496-1.336A3 3 0 0 0 13.07 8V6a1 1 0 0 1-.832-.445l-1.664 1.11zm-.812-1.219l.812 1.22l1.664-1.11l-.812-1.22zM8.93 5a1 1 0 0 1 .832.445l1.664-1.11A3 3 0 0 0 8.93 3zM5 5h3.93V3H5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 18h6"></svg:path></svg:g>`,
})
export class MajesticonsFolderMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFolderMinusLineIcon],svg[majesticons-folder-minus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13V9a2 2 0 0 0-2-2h-5.93a2 2 0 0 1-1.664-.89l-.812-1.22A2 2 0 0 0 8.93 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6m4-2h6"></svg:path>`,
})
export class MajesticonsFolderMinusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFolderOpenIcon],svg[majesticons-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M21 10.17c1.165.412 2 1.524 2 2.83v5a3 3 0 0 1-3 3H6v-8a3 3 0 0 1 3-3h12v.17zM20.83 8A3.001 3.001 0 0 0 18 6h-5.93a1 1 0 0 1-.832-.445l-.812-1.22A3 3 0 0 0 7.93 3H5a3 3 0 0 0-3 3v12c0 .493.14 1.211.588 1.834A2.73 2.73 0 0 0 4 20.854V13a5 5 0 0 1 5-5h11.83z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsFolderOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFolderOpenLineIcon],svg[majesticons-folder-open-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 6a3 3 0 0 1 3-3h2.93a3 3 0 0 1 2.496 1.336l.812 1.219A1 1 0 0 0 12.07 6H18a3 3 0 0 1 3 3v2h-2V9a1 1 0 0 0-1-1h-5.93a3 3 0 0 1-2.496-1.336l-.812-1.219A1 1 0 0 0 7.93 5H5a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0v-2h2v2a3 3 0 1 1-6 0V6z"></svg:path><svg:path d="M6 13a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H5v-2c.173 0 .456-.06.666-.212c.159-.114.334-.314.334-.788v-5zm1.853 6H20a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v5c0 .368-.053.701-.147 1z"></svg:path></svg:g>`,
})
export class MajesticonsFolderOpenLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFolderPlusIcon],svg[majesticons-folder-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M5 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6.29A7 7 0 0 1 21 11.674V9a2 2 0 0 0-2-2h-5.93a2 2 0 0 1-1.664-.89l-.812-1.22A2 2 0 0 0 8.93 4z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11.29 20v1a1 1 0 0 0 .958-1.285zM21 11.674l-.43.903a1 1 0 0 0 1.43-.903zm-9.594-5.565l.832-.554zm-.812-1.218l-.832.554zM4 6a1 1 0 0 1 1-1V3a3 3 0 0 0-3 3zm0 12V6H2v12zm1 1a1 1 0 0 1-1-1H2a3 3 0 0 0 3 3zm6.29 0H5v2h6.29zm.958.715A6 6 0 0 1 12 18h-2c0 .793.116 1.56.331 2.285zM12 18a6 6 0 0 1 6-6v-2a8 8 0 0 0-8 8zm6-6a5.96 5.96 0 0 1 2.57.577l.86-1.807A8 8 0 0 0 18 10zm2-3v2.674h2V9zm-1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zm-5.93 0H19V6h-5.93zm-2.496-1.336A3 3 0 0 0 13.07 8V6a1 1 0 0 1-.832-.445l-1.664 1.11zm-.812-1.219l.812 1.22l1.664-1.11l-.812-1.22zM8.93 5a1 1 0 0 1 .832.445l1.664-1.11A3 3 0 0 0 8.93 3zM5 5h3.93V3H5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 15v3m0 3v-3m0 0h-3m3 0h3"></svg:path></svg:g>`,
})
export class MajesticonsFolderPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFolderPlusLineIcon],svg[majesticons-folder-plus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13V9a2 2 0 0 0-2-2h-5.93a2 2 0 0 1-1.664-.89l-.812-1.22A2 2 0 0 0 8.93 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7m6-5v3m0 3v-3m0 0h-3m3 0h3"></svg:path>`,
})
export class MajesticonsFolderPlusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFolderRemoveIcon],svg[majesticons-folder-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 6a3 3 0 0 1 3-3h3.93a3 3 0 0 1 2.496 1.336l.812 1.219A1 1 0 0 0 13.07 6H19a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6zm7 7a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsFolderRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFolderRemoveLineIcon],svg[majesticons-folder-remove-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5.93a3 3 0 0 1-2.496-1.336l-.812-1.219A1 1 0 0 0 8.93 5H5zM2 6a3 3 0 0 1 3-3h3.93a3 3 0 0 1 2.496 1.336l.812 1.219A1 1 0 0 0 13.07 6H19a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6z"></svg:path><svg:path d="M8 14a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class MajesticonsFolderRemoveLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFontSizeIcon],svg[majesticons-font-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6h4m4 0h-4m0 0v12M4 11h3m3 0H7m0 0v7"></svg:path>`,
})
export class MajesticonsFontSizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsFontSizeLineIcon],svg[majesticons-font-size-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6h4m4 0h-4m0 0v12M4 11h3m3 0H7m0 0v7"></svg:path>`,
})
export class MajesticonsFontSizeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsForwardIcon],svg[majesticons-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M12 5a1 1 0 0 1 1.707-.707l7 7a1 1 0 0 1 0 1.414l-7 7A1 1 0 0 1 12 19v-3H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h8V5z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsForwardCircleIcon],svg[majesticons-forward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M6.507 8.13a1 1 0 0 1 1.008.013L12 10.833V9a1 1 0 0 1 1.514-.857l5 3a1 1 0 0 1 0 1.714l-5 3A1 1 0 0 1 12 15v-1.834l-4.486 2.691A1 1 0 0 1 6 15V9a1 1 0 0 1 .507-.87M8 13.234L10.056 12L8 10.766zM16.056 12L14 13.234v-2.468z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsForwardCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsForwardCircleLineIcon],svg[majesticons-forward-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M7 15V9l5 3zm6 0V9l5 3z"></svg:path></svg:g>`,
})
export class MajesticonsForwardCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsForwardEndCircleIcon],svg[majesticons-forward-end-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M6.507 8.13a1 1 0 0 1 1.008.013L11 10.233V9a1 1 0 0 1 1.514-.857L16 10.233V9a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0v-1.234l-3.486 2.091A1 1 0 0 1 11 15v-1.234l-3.486 2.091A1 1 0 0 1 6 15V9a1 1 0 0 1 .507-.87M13 12v1.234L15.056 12L13 10.766zm-5 1.234L10.056 12L8 10.766z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsForwardEndCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsForwardEndCircleLineIcon],svg[majesticons-forward-end-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M7 15V9l5 3zm10-3l-5 3V9zm0 0V9m0 3v3"></svg:path></svg:g>`,
})
export class MajesticonsForwardEndCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsForwardLineIcon],svg[majesticons-forward-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.617 4.076A1 1 0 0 0 12 5v3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8v3a1 1 0 0 0 1.707.707l7-7a1 1 0 0 0 0-1.414l-7-7a1 1 0 0 0-1.09-.217zM18.586 12L14 16.586V15a1 1 0 0 0-1-1H5v-4h8a1 1 0 0 0 1-1V7.414L18.586 12z"></svg:path></svg:g>`,
})
export class MajesticonsForwardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsGhostIcon],svg[majesticons-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M6.416 3.788C8.289 2.44 10.506 2 12 2c3.526 0 5.826 1.492 7.212 3.416C20.56 7.289 21 9.506 21 11v9a1 1 0 0 1-1.707.707L18 19.414L16.414 21a2 2 0 0 1-2.828 0L12 19.414L10.414 21a2 2 0 0 1-2.828 0L6 19.414l-1.293 1.293A1 1 0 0 1 3 20v-9c0-3.526 1.492-5.826 3.416-7.212zM7 10a2 2 0 1 1 4 0a2 2 0 0 1-4 0zm6 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsGhostIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsGhostLineIcon],svg[majesticons-ghost-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.416 3.788C8.289 2.44 10.506 2 12 2c3.526 0 5.826 1.492 7.212 3.416C20.56 7.289 21 9.506 21 11v9a1 1 0 0 1-1.707.707L18 19.414L16.414 21a2 2 0 0 1-2.828 0L12 19.414L10.414 21a2 2 0 0 1-2.828 0L6 19.414l-1.293 1.293A1 1 0 0 1 3 20v-9c0-3.526 1.492-5.826 3.416-7.212zm1.168 1.624C6.175 6.426 5 8.126 5 11v6.682A2 2 0 0 1 7.414 18L9 19.586L10.586 18a2 2 0 0 1 2.828 0L15 19.586L16.586 18A2 2 0 0 1 19 17.682V11c0-1.173-.36-2.956-1.412-4.416C16.575 5.175 14.874 4 12 4c-1.173 0-2.956.36-4.416 1.412zM7 10a2 2 0 1 1 4 0a2 2 0 0 1-4 0zm8-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4z"></svg:path></svg:g>`,
})
export class MajesticonsGhostLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsGitBranchIcon],svg[majesticons-git-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 21v-6m0-6v6m0 0h8a2 2 0 0 0 2-2v-2"></svg:path><svg:circle cx="7" cy="6" r="3" fill="currentColor"></svg:circle><svg:circle cx="17" cy="8" r="3" fill="currentColor"></svg:circle></svg:g>`,
})
export class MajesticonsGitBranchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsGitBranchLineIcon],svg[majesticons-git-branch-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 21v-6m0-6v6m0 0h8a2 2 0 0 0 2-2v-2"></svg:path><svg:circle cx="7" cy="6" r="3"></svg:circle><svg:circle cx="17" cy="8" r="3"></svg:circle></svg:g>`,
})
export class MajesticonsGitBranchLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsGitCommitIcon],svg[majesticons-git-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16a4 4 0 0 1 0-8m0 8a4 4 0 0 0 0-8m0 8v5m0-13V3"></svg:path></svg:g>`,
})
export class MajesticonsGitCommitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsGitCommitLineIcon],svg[majesticons-git-commit-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16a4 4 0 0 1 0-8m0 8a4 4 0 0 0 0-8m0 8v5m0-13V3"></svg:path>`,
})
export class MajesticonsGitCommitLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsGitCompareIcon],svg[majesticons-git-compare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M21 17a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0 0V9a2 2 0 0 0-2-2h-1m-2 0l2-2v2m-2 0h2m-2 0l2 2V7"></svg:path><svg:path fill="currentColor" d="M3 8a3 3 0 1 1 6 0a3 3 0 0 1-6 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 11a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 0v5a2 2 0 0 0 2 2h1m2 0l-2 2v-2m2 0H9m2 0l-2-2v2"></svg:path></svg:g>`,
})
export class MajesticonsGitCompareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsGitCompareLineIcon],svg[majesticons-git-compare-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0 0V9a2 2 0 0 0-2-2h-1m-2 0l2-2v2m-2 0h2m-2 0l2 2V7m-9 4a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 0v5a2 2 0 0 0 2 2h1m2 0l-2 2v-2m2 0H9m2 0l-2-2v2"></svg:path>`,
})
export class MajesticonsGitCompareLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsGitForkIcon],svg[majesticons-git-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="6" cy="6" r="3" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="18" cy="6" r="3" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="12" cy="18" r="3" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path d="M6 9v1a2 2 0 0 0 2 2h4m6-3v1a2 2 0 0 1-2 2h-4m0 0v3"></svg:path></svg:g>`,
})
export class MajesticonsGitForkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsGitForkLineIcon],svg[majesticons-git-fork-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="6" cy="6" r="3" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="18" cy="6" r="3" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="12" cy="18" r="3" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path d="M6 9v1a2 2 0 0 0 2 2h4m6-3v1a2 2 0 0 1-2 2h-4m0 0v3"></svg:path></svg:g>`,
})
export class MajesticonsGitForkLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsGitMergeIcon],svg[majesticons-git-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M10 7a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 0v10m0-10c0 2.333 1.4 7 7 7"></svg:path><svg:circle cx="17" cy="17" r="3" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle></svg:g>`,
})
export class MajesticonsGitMergeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsGitMergeLineIcon],svg[majesticons-git-merge-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 0v10m0-10c0 2.333 1.4 7 7 7"></svg:path><svg:circle cx="17" cy="17" r="3"></svg:circle></svg:g>`,
})
export class MajesticonsGitMergeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsGitPullIcon],svg[majesticons-git-pull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M9 7a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 0v10"></svg:path><svg:path fill="currentColor" d="M21 17a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0 0V9a2 2 0 0 0-2-2h-1m-2 0l2-2v2m-2 0h2m-2 0l2 2V7"></svg:path></svg:g>`,
})
export class MajesticonsGitPullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsGitPullLineIcon],svg[majesticons-git-pull-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 0v10m12-6a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0 0V9a2 2 0 0 0-2-2h-1m-2 0l2-2v2m-2 0h2m-2 0l2 2V7"></svg:path>`,
})
export class MajesticonsGitPullLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsGlasWaterIcon],svg[majesticons-glas-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M15.234 20H8.766a2 2 0 0 1-1.985-1.752L6 12l2.072-.69a2 2 0 0 1 1.742.233l1.077.717a2 2 0 0 0 2.218 0l1.077-.717a2 2 0 0 1 1.742-.234L18 12l-.781 6.248A2 2 0 0 1 15.234 20"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 4h15M6 12l.781 6.248A2 2 0 0 0 8.766 20h6.468a2 2 0 0 0 1.985-1.752L18 12M6 12l2.072-.69a2 2 0 0 1 1.742.233l1.077.717a2 2 0 0 0 2.218 0l1.077-.717a2 2 0 0 1 1.742-.234L18 12M6 12l-.938-7.5M18 12l.938-7.5"></svg:path></svg:g>`,
})
export class MajesticonsGlasWaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsGlasWaterLineIcon],svg[majesticons-glas-water-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h14M5 4h-.5M5 4l1 8m13-8h.5M19 4l-1 8M6 12l.781 6.248A2 2 0 0 0 8.766 20h6.468a2 2 0 0 0 1.985-1.752L18 12M6 12l2.072-.69a2 2 0 0 1 1.742.233l1.077.717a2 2 0 0 0 2.218 0l1.077-.717a2 2 0 0 1 1.742-.234L18 12"></svg:path>`,
})
export class MajesticonsGlasWaterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsGlobeIcon],svg[majesticons-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M10.059 2.188a10.016 10.016 0 0 0-7.242 5.847h4.616a16.98 16.98 0 0 1 2.19-5.162l.436-.685zM2.202 9.99a10.04 10.04 0 0 0 0 4.021c.094-.029.194-.044.298-.044h4.579a17.026 17.026 0 0 1 0-3.931H2.5a.978.978 0 0 1-.298-.046zm.615 5.976a10.017 10.017 0 0 0 7.242 5.847l-.436-.685a16.98 16.98 0 0 1-2.19-5.161H2.817zm11.124 5.847a10.017 10.017 0 0 0 7.242-5.847h-4.616a16.98 16.98 0 0 1-2.19 5.162l-.436.685zm7.857-7.802a10.037 10.037 0 0 0 0-4.02a1.009 1.009 0 0 1-.298.044h-4.579a17.023 17.023 0 0 1 0 3.931H21.5c.104 0 .204.016.298.046zm-.615-5.975h-4.616a16.98 16.98 0 0 0-2.19-5.162l-.436-.685a10.017 10.017 0 0 1 7.242 5.847zM12.69 3.947a14.987 14.987 0 0 1 1.812 4.088H9.498c.39-1.424.994-2.803 1.812-4.088L12 2.863l.69 1.084zM9.094 13.966a15.023 15.023 0 0 1 0-3.931h5.812a15.02 15.02 0 0 1 0 3.93H9.094zm2.216 6.087a14.986 14.986 0 0 1-1.812-4.088h5.004a14.986 14.986 0 0 1-1.812 4.088L12 21.137l-.69-1.084z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsGlobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsGlobeEarthIcon],svg[majesticons-globe-earth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path fill="currentColor" d="M8 6V4c2.5-1.167 8.4-2 12 4h-1a2 2 0 0 0-2 2a2 2 0 1 1-4 0a2 2 0 0 0-2-2h-1a2 2 0 0 1-2-2m9 10h3c-1.2 1.6-3.833 3.333-5 4v-2a2 2 0 0 1 2-2m-6 2v2c-6.4-.4-8-5.5-8-8h2a2 2 0 0 1 2 2a2 2 0 0 0 2 2a2 2 0 0 1 2 2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 6V4c2.5-1.167 8.4-2 12 4h-1a2 2 0 0 0-2 2a2 2 0 1 1-4 0a2 2 0 0 0-2-2h-1a2 2 0 0 1-2-2m9 10h3c-1.2 1.6-3.833 3.333-5 4v-2a2 2 0 0 1 2-2m-6 2v2c-6.4-.4-8-5.5-8-8h2a2 2 0 0 1 2 2a2 2 0 0 0 2 2a2 2 0 0 1 2 2"></svg:path></svg:g>`,
})
export class MajesticonsGlobeEarthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsGlobeEarth2Icon],svg[majesticons-globe-earth-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path fill="currentColor" d="M13.5 6h.5a2 2 0 0 0 2-2C8.4 1.2 4.5 6.5 3.5 9.5l4.167 5.093c.215.263.333.593.333.933C8 16.34 8.673 17 9.487 17c.828 0 1.513.672 1.513 1.5V21c2.167-.167 6.8-1.2 8-4h-1a2 2 0 0 1-2-2a2 2 0 0 0-2-2h-2a2 2 0 0 1-2-2v-1a1 1 0 0 1 1-1a1 1 0 0 0 1-1v-.5A1.5 1.5 0 0 1 13.5 6"></svg:path></svg:g>`,
})
export class MajesticonsGlobeEarth2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsGlobeEarth2LineIcon],svg[majesticons-globe-earth-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M16 4a2 2 0 0 1-2 2h-.5A1.5 1.5 0 0 0 12 7.5V8a1 1 0 0 1-1 1v0a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a2 2 0 0 1 2 2v0a2 2 0 0 0 2 2h1m-8 4v-2.5c0-.828-.685-1.5-1.513-1.5v0C8.673 17 8 16.34 8 15.526v0c0-.34-.118-.67-.333-.933L3.5 9.5"></svg:path></svg:g>`,
})
export class MajesticonsGlobeEarth2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsGlobeEarthLineIcon],svg[majesticons-globe-earth-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M8 4v2a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v0a2 2 0 0 0 2 2v0a2 2 0 0 0 2-2v0a2 2 0 0 1 2-2h1m0 8h-3a2 2 0 0 0-2 2v2m-4 0v-2a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v0a2 2 0 0 0-2-2H3"></svg:path></svg:g>`,
})
export class MajesticonsGlobeEarthLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsGlobeGridIcon],svg[majesticons-globe-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.5 9.035a9.004 9.004 0 0 0-17 0m17 0c.324.928.5 1.926.5 2.965a9 9 0 0 1-.5 2.966m0-5.931h-17m0 0A9 9 0 0 0 3 12a9 9 0 0 0 .5 2.966m0 0a9.004 9.004 0 0 0 17 0m-17 0h17"></svg:path><svg:path d="M12 21c4.97-4.97 4.97-13.03 0-18c-4.97 4.97-4.97 13.03 0 18"></svg:path></svg:g>`,
})
export class MajesticonsGlobeGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsGlobeGridLineIcon],svg[majesticons-globe-grid-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.5 9.035a9.004 9.004 0 0 0-17 0m17 0c.324.928.5 1.926.5 2.965a9 9 0 0 1-.5 2.966m0-5.931h-17m0 0A9 9 0 0 0 3 12a9 9 0 0 0 .5 2.966m0 0a9.004 9.004 0 0 0 17 0m-17 0h17"></svg:path><svg:path d="M12 21c4.97-4.97 4.97-13.03 0-18c-4.97 4.97-4.97 13.03 0 18"></svg:path></svg:g>`,
})
export class MajesticonsGlobeGridLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsGlobeLineIcon],svg[majesticons-globe-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12z"></svg:path><svg:path d="M11.293 2.293c-5.361 5.36-5.361 14.053 0 19.414h1.414c5.361-5.361 5.361-14.053 0-19.414h-1.414zM12 4.479c3.637 4.343 3.637 10.7 0 15.042c-3.637-4.343-3.637-10.7 0-15.042z"></svg:path><svg:path d="M3 9a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class MajesticonsGlobeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsHandIcon],svg[majesticons-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.5 22C4.7 22 3 16.333 3 13.5V10c0-.167.1-.5.5-.5s.5.333.5.5v2c1.215.722 1.877.699 3 0V4c0-.167.1-.5.5-.5s.5.333.5.5v8c1.93-.882 2.73-1.484 3-3V3c0-.167.1-.5.5-.5s.5.333.5.5v6c.622 1.739 1.26 2.168 3 2V4c0-.167.1-.5.5-.5s.5.333.5.5v7c.728.963 1.455 1.09 3 1V9c0-.167.1-.5.5-.5s.5.333.5.5v4.5c0 2.833-1.7 8.5-8.5 8.5"></svg:path>`,
})
export class MajesticonsHandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsHandLineIcon],svg[majesticons-hand-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13 6V4.5A1.5 1.5 0 0 0 11.5 3v0A1.5 1.5 0 0 0 10 4.5V12m3-1V5.5A1.5 1.5 0 0 1 14.5 4v0A1.5 1.5 0 0 1 16 5.5V10m-6-3V5.5A1.5 1.5 0 0 0 8.5 4v0A1.5 1.5 0 0 0 7 5.5v6M7 14v-2.5A1.5 1.5 0 0 0 5.5 10v0A1.5 1.5 0 0 0 4 11.5v2C4 16 5.5 21 11.5 21c2.5 0 7.5-1.5 7.5-7.5v-4A1.5 1.5 0 0 0 17.5 8v0A1.5 1.5 0 0 0 16 9.5V12"></svg:path>`,
})
export class MajesticonsHandLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsHandPointerIcon],svg[majesticons-hand-pointer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 17v1a2 2 0 0 1-2 2H8.236a2 2 0 0 1-1.789-1.106l-2.276-4.552A1.618 1.618 0 0 1 5.618 12H6a2 2 0 0 1 1.6.8L10 16V6a2 2 0 1 1 4 0v6a1 1 0 0 0 1 1h1a4 4 0 0 1 4 4"></svg:path>`,
})
export class MajesticonsHandPointerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsHandPointer2Icon],svg[majesticons-hand-pointer-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.5 22C4.7 22 3 16.333 3 13.5V10c0-.333.2-1 1-1s1 .667 1 1v2c0 .5.3 1.5 1.5 1.5S8 12.5 8 12V3c0-.333.2-1 1-1s1 .667 1 1v7c.5.5.8 1.2 2 0V8c0-.333.2-1 1-1s1 .667 1 1v1h1c0-.333.2-1 1-1s1 .667 1 1v1h1c0-.333.2-1 1-1s1 .667 1 1v3.5c0 2.833-1.7 8.5-8.5 8.5"></svg:path>`,
})
export class MajesticonsHandPointer2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsHandPointer2LineIcon],svg[majesticons-hand-pointer-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13 10V8.5A1.5 1.5 0 0 0 11.5 7v0A1.5 1.5 0 0 0 10 8.5V11m3 0V9.5A1.5 1.5 0 0 1 14.5 8v0A1.5 1.5 0 0 1 16 9.5v.5m-9 1.5v-7A1.5 1.5 0 0 1 8.5 3v0A1.5 1.5 0 0 1 10 4.5V11m0 1v-1m-3 3v-2.5A1.5 1.5 0 0 0 5.5 10v0A1.5 1.5 0 0 0 4 11.5v2C4 16 5.5 21 11.5 21c2.5 0 7.5-1.5 7.5-7.5V12a2 2 0 0 0-2-2h-1m0 0v2"></svg:path>`,
})
export class MajesticonsHandPointer2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsHandPointerEventIcon],svg[majesticons-hand-pointer-event-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" d="M15 15h1a4 4 0 0 1 4 4a2 2 0 0 1-2 2H8.132a2 2 0 0 1-1.715-.971l-2.194-3.657A1.566 1.566 0 0 1 5.566 14H6a2 2 0 0 1 1.6.8L10 18V9a2 2 0 1 1 4 0v5a1 1 0 0 0 1 1"></svg:path><svg:path d="M12 4V3m6 7h1M5 10h1m1.343-4.657l-.707-.707m10.021.707l.707-.707"></svg:path></svg:g>`,
})
export class MajesticonsHandPointerEventIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsHandPointerEventLineIcon],svg[majesticons-hand-pointer-event-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 21v-2a4 4 0 0 0-4-4h-1a1 1 0 0 1-1-1V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v9l-2.4-3.2A2 2 0 0 0 6 14h-.434C4.701 14 4 14.701 4 15.566v0c0 .284.077.563.223.806L7 21m5-17V3m6 7h1M5 10h1m1.343-4.657l-.707-.707m10.021.707l.707-.707"></svg:path>`,
})
export class MajesticonsHandPointerEventLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsHandPointerLineIcon],svg[majesticons-hand-pointer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 20v-3a4 4 0 0 0-4-4h-1a1 1 0 0 1-1-1V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10l-2.4-3.2A2 2 0 0 0 6 12h-.382C4.724 12 4 12.724 4 13.618v0c0 .251.058.499.17.724L7 20"></svg:path>`,
})
export class MajesticonsHandPointerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsHardDriveIcon],svg[majesticons-hard-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v9H4zm0 11v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-3zm9 2a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsHardDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsHardDriveLineIcon],svg[majesticons-hard-drive-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15h14M5 15v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M5 15V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10m-6 3h3"></svg:path>`,
})
export class MajesticonsHardDriveLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsHashtagIcon],svg[majesticons-hashtag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5zm7.316 4.051a1 1 0 0 1 .633 1.265L12.054 9h1.892l1.105-3.316a1 1 0 0 1 1.898.632L16.054 9H19a1 1 0 1 1 0 2h-3.613l-.666 2H17a1 1 0 1 1 0 2h-2.946l-1.105 3.316a1 1 0 0 1-1.898-.632L11.946 15h-1.892L8.95 18.316a1 1 0 1 1-1.898-.632L7.946 15H5a1 1 0 1 1 0-2h3.613l.666-2H7a1 1 0 1 1 0-2h2.946l1.105-3.316a1 1 0 0 1 1.265-.633zM10.721 13l.666-2h1.892l-.666 2H10.72z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsHashtagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsHashtagLineIcon],svg[majesticons-hashtag-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.242 3.03a1 1 0 0 1 .728 1.213l-4 16a1 1 0 1 1-1.94-.485l4-16a1 1 0 0 1 1.213-.728zm6 0a1 1 0 0 1 .728 1.213l-4 16a1 1 0 1 1-1.94-.485l4-16a1 1 0 0 1 1.212-.728z"></svg:path><svg:path d="M4 9a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm-2 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class MajesticonsHashtagLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsHeadsetIcon],svg[majesticons-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4 18v-7c0-2.333 2.4-7 8-7s8 4.667 8 7v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h3v-3c0-2.333-2.4-7-8-7s-8 4.667-8 7v3h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 14v4a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm0 0v-3c0-2.333 2.4-7 8-7s8 4.667 8 7v3m0 0v4a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z"></svg:path></svg:g>`,
})
export class MajesticonsHeadsetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsHeadsetLineIcon],svg[majesticons-headset-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 14v4a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm0 0v-3c0-2.333 2.4-7 8-7s8 4.667 8 7v3m0 0v4a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z"></svg:path>`,
})
export class MajesticonsHeadsetLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsHeartIcon],svg[majesticons-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 4c-3.2 0-5 2.667-5 4c0-1.333-1.8-4-5-4S3 6.667 3 8c0 7 9 12 9 12s9-5 9-12c0-1.333-.8-4-4-4"></svg:path>`,
})
export class MajesticonsHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsHeartLineIcon],svg[majesticons-heart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 4c-3.2 0-5 2.667-5 4c0-1.333-1.8-4-5-4S3 6.667 3 8c0 7 9 12 9 12s9-5 9-12c0-1.333-.8-4-4-4"></svg:path>`,
})
export class MajesticonsHeartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsHomeIcon],svg[majesticons-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 19v-8.5a1 1 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1"></svg:path>`,
})
export class MajesticonsHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsHomeAnalyticsIcon],svg[majesticons-home-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.8 3.65a2 2 0 0 1 2.4 0l7 5.25l-.6.8l.6-.8a2 2 0 0 1 .8 1.6V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8.5a2 2 0 0 1 .8-1.6zM13 10a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zm-4 3a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zm8 2a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsHomeAnalyticsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsHomeAnalyticsLineIcon],svg[majesticons-home-analytics-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 19v-8.5a1 1 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1M8 13v3m4-6v6m4-1v1"></svg:path>`,
})
export class MajesticonsHomeAnalyticsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsHomeLineIcon],svg[majesticons-home-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 19v-8.5a1 1 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8V19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1"></svg:path>`,
})
export class MajesticonsHomeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsHomeSimpleIcon],svg[majesticons-home-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 19v-8.5a1 1 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1"></svg:path>`,
})
export class MajesticonsHomeSimpleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsHomeSimpleLineIcon],svg[majesticons-home-simple-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 19v-8.5a1 1 0 0 0-.4-.8l-7-5.25a1 1 0 0 0-1.2 0l-7 5.25a1 1 0 0 0-.4.8V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1"></svg:path>`,
})
export class MajesticonsHomeSimpleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsImageIcon],svg[majesticons-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v6.5a1 1 0 0 1-.032.25A1 1 0 0 1 22 12v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-3a1 1 0 0 1 .032-.25A1 1 0 0 1 2 15.5zm2.994 9.83q-.522.01-.994.046V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v6.016c-4.297.139-7.4 1.174-9.58 2.623c.826.293 1.75.71 2.656 1.256c1.399.84 2.821 2.02 3.778 3.583a1 1 0 1 1-1.706 1.044c-.736-1.203-1.878-2.178-3.102-2.913c-1.222-.734-2.465-1.192-3.327-1.392a15.5 15.5 0 0 0-3.703-.386h-.022zm1.984-8.342A2.67 2.67 0 0 1 8.5 6c.41 0 1.003.115 1.522.488c.57.41.978 1.086.978 2.012s-.408 1.601-.978 2.011A2.67 2.67 0 0 1 8.5 11c-.41 0-1.003-.115-1.522-.489C6.408 10.101 6 9.427 6 8.5c0-.926.408-1.601.978-2.012" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[majesticonsImageCircleIcon],svg[majesticons-image-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M6.978 6.488A2.67 2.67 0 0 1 8.5 6c.41 0 1.003.115 1.522.488c.57.41.978 1.086.978 2.012s-.408 1.601-.978 2.011A2.67 2.67 0 0 1 8.5 11c-.41 0-1.003-.115-1.522-.489C6.408 10.101 6 9.427 6 8.5c0-.926.408-1.601.978-2.012m9.353 15.456C18.611 21.177 23 18.143 23 12a1 1 0 0 0-1-1h-1c-4.803 0-8.21 1.072-10.555 2.622c2.035.662 4.076 1.82 5.63 3.751a1 1 0 0 1-1.56 1.254c-1.515-1.884-3.65-2.912-5.796-3.41a15.5 15.5 0 0 0-3.531-.388c-.784.003-1.477.066-2.024.157a1 1 0 0 1-.232.012l-.096.016a1 1 0 0 0-.76 1.367c.652 1.584 2.135 3.723 4.51 5.097c2.42 1.399 5.684 1.958 9.745.466" clip-rule="evenodd"></svg:path><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle></svg:g>`,
})
export class MajesticonsImageCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
