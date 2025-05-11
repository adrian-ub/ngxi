import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNoteMinusIcon],svg[mdi-note-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.7 0 1.37.13 2 .35V9l-6-6H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h8.35c-.22-.63-.35-1.3-.35-2c0-3.31 2.69-6 6-6m-5-8.5l5.5 5.5H14zM23 18v2h-8v-2z"></svg:path>`,
})
export class MdiNoteMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNoteMinusOutlineIcon],svg[mdi-note-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 18v2h-8v-2zm-10 1c0 .7.13 1.37.35 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h10l6 6v4.35c-.63-.22-1.3-.35-2-.35v-1h-7V5H5v14zm1-9h5.5L14 4.5z"></svg:path>`,
})
export class MdiNoteMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNoteMultipleIcon],svg[mdi-note-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9h5.5L16 3.5zM7 2h10l6 6v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2M3 6v16h18v2H3a2 2 0 0 1-2-2V6z"></svg:path>`,
})
export class MdiNoteMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNoteMultipleOutlineIcon],svg[mdi-note-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6v16h18v2H3a2 2 0 0 1-2-2V6zm13 3h5.5L16 3.5zM7 2h10l6 6v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 2v14h14v-7h-7V4z"></svg:path>`,
})
export class MdiNoteMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNoteOffIcon],svg[mdi-note-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.11 21.46l-1.27 1.27L19.1 21H5a2 2 0 0 1-2-2V4.9L1.11 3l1.28-1.27L20.7 20.04v.01zM21 17.8L6.2 3H15l6 6zM19.5 10L14 4.5V10z"></svg:path>`,
})
export class MdiNoteOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNoteOffOutlineIcon],svg[mdi-note-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5v3.8l3.2 3.2H19v3.8l2 2V9l-6-6H6.2l2 2zm2-.5l5.5 5.5H14zm6.7 15.55v-.01l-1.7-1.7v.01L12.66 12l-.66-.66v.01L6.14 5.5L2.39 1.73L1.11 3L3 4.9V19a2 2 0 0 0 2 2h14.1l1.74 1.73l1.27-1.27zM5 19V6.89L17.11 19z"></svg:path>`,
})
export class MdiNoteOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNoteOutlineIcon],svg[mdi-note-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10h5.5L14 4.5zM5 3h10l6 6v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2m0 2v14h14v-7h-7V5z"></svg:path>`,
})
export class MdiNoteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNotePlusIcon],svg[mdi-note-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.7 0 1.37.13 2 .35V9l-6-6H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h8.35c-.22-.63-.35-1.3-.35-2c0-3.31 2.69-6 6-6m-5-8.5l5.5 5.5H14zM23 18v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"></svg:path>`,
})
export class MdiNotePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNotePlusOutlineIcon],svg[mdi-note-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19V5h7v7h7v1c.7 0 1.37.13 2 .35V9l-6-6H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h8.35c-.22-.63-.35-1.3-.35-2zm9-14.5l5.5 5.5H14zM23 18v2h-3v3h-2v-3h-3v-2h3v-3h2v3z"></svg:path>`,
})
export class MdiNotePlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNoteRemoveIcon],svg[mdi-note-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.7 0 1.37.13 2 .35V9l-6-6H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h8.35c-.22-.63-.35-1.3-.35-2c0-3.31 2.69-6 6-6m-5-8.5l5.5 5.5H14zM20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.41-1.42L17.59 19l-2.12-2.12l1.41-1.41L19 17.59l2.12-2.12l1.42 1.41z"></svg:path>`,
})
export class MdiNoteRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNoteRemoveOutlineIcon],svg[mdi-note-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19V5h7v7h7v1c.7 0 1.37.13 2 .35V9l-6-6H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h8.35c-.22-.63-.35-1.3-.35-2zm9-14.5l5.5 5.5H14zM20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.41-1.42L17.59 19l-2.12-2.12l1.41-1.41L19 17.59l2.12-2.12l1.42 1.41z"></svg:path>`,
})
export class MdiNoteRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNoteSearchIcon],svg[mdi-note-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3H5c-1.11 0-2 .89-2 2v5.82a6.505 6.505 0 0 1 9.1.08a6.525 6.525 0 0 1 0 9.2c-.36.35-.75.64-1.16.9H19c1.11 0 2-.89 2-2V9zm-1 7V4.5l5.5 5.5zm-6.5 1C5 11 3 13 3 15.5c0 .88.25 1.71.69 2.4L.61 21L2 22.39l3.12-3.07c.69.43 1.51.68 2.38.68c2.5 0 4.5-2 4.5-4.5S10 11 7.5 11m0 7a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class MdiNoteSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNoteSearchOutlineIcon],svg[mdi-note-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3H5c-1.11 0-2 .89-2 2v5.82A6.4 6.4 0 0 1 5 9.5V5h7v5.82c.03.03.07.05.1.08c.34.34.63.71.87 1.1H19v7h-6.03c-.24.39-.53.76-.87 1.1c-.36.35-.75.64-1.16.9H19c1.11 0 2-.89 2-2V9zm-1 7V4.5l5.5 5.5zm-6.5 1C5 11 3 13 3 15.5c0 .88.25 1.71.69 2.4L.61 21L2 22.39l3.12-3.07c.69.43 1.51.68 2.38.68c2.5 0 4.5-2 4.5-4.5S10 11 7.5 11m0 7a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class MdiNoteSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNoteTextIcon],svg[mdi-note-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10h5.5L14 4.5zM5 3h10l6 6v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2m0 9v2h14v-2zm0 4v2h9v-2z"></svg:path>`,
})
export class MdiNoteTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNoteTextOutlineIcon],svg[mdi-note-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9zm4 16H5V5h9v5h5m-2 4H7v-2h10m-3 5H7v-2h7"></svg:path>`,
})
export class MdiNoteTextOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNotebookIcon],svg[mdi-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7V5h2V4a2 2 0 0 1 2-2h6v7l2.5-1.5L18 9V2h1c1.05 0 2 .95 2 2v16c0 1.05-.95 2-2 2H7c-1.05 0-2-.95-2-2v-1H3v-2h2v-4H3v-2h2V7zm4 4H5v2h2zm0-4V5H5v2zm0 12v-2H5v2z"></svg:path>`,
})
export class MdiNotebookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNotebookCheckIcon],svg[mdi-notebook-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.75 22.16l-2.75-3L15.16 18l1.59 1.59L20.34 16l1.16 1.41zM3 7V5h2V4a2 2 0 0 1 2-2h6v7l2.5-1.5L18 9V2h1c1.05 0 2 .95 2 2v9.8a6.005 6.005 0 0 0-8.2 8.2H7c-1.05 0-2-.95-2-2v-1H3v-2h2v-4H3v-2h2V7zm2-2v2h2V5zm0 14h2v-2H5zm0-6h2v-2H5z"></svg:path>`,
})
export class MdiNotebookCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNotebookCheckOutlineIcon],svg[mdi-notebook-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.75 22.16l-2.75-3L15.16 18l1.59 1.59L20.34 16l1.16 1.41zM17 4v6l-2-2l-2 2V4H9v16h3.08c.12.72.37 1.39.72 2H7c-1.05 0-2-.95-2-2v-1H3v-2h2v-4H3v-2h2V7H3V5h2V4a2 2 0 0 1 2-2h12c1.05 0 2 .95 2 2v9.8c-.61-.35-1.28-.6-2-.72V4zM5 19h2v-2H5zm0-6h2v-2H5zm0-6h2V5H5z"></svg:path>`,
})
export class MdiNotebookCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNotebookEditIcon],svg[mdi-notebook-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.04 13.13c.14 0 .27.06.38.17l1.28 1.28c.22.21.22.56 0 .77l-1 1l-2.05-2.05l1-1c.11-.11.25-.17.39-.17m-1.97 1.75l2.05 2.05L15.06 23H13v-2.06zM3 7V5h2V4a2 2 0 0 1 2-2h6v7l2.5-1.5L18 9V2h1c1.05 0 2 .95 2 2v6L11 20v2H7c-1.05 0-2-.95-2-2v-1H3v-2h2v-4H3v-2h2V7zm2 0h2V5H5zm0 4v2h2v-2zm0 6v2h2v-2z"></svg:path>`,
})
export class MdiNotebookEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNotebookEditOutlineIcon],svg[mdi-notebook-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.07 14.88l2.05 2.05L15.06 23H13v-2.06zm1.97-1.75c.14 0 .27.06.38.17l1.28 1.28c.22.21.22.56 0 .77l-1 1l-2.05-2.05l1-1c.11-.11.25-.17.39-.17M17 4v6l-2-2l-2 2V4H9v16h2v2H7c-1.05 0-2-.95-2-2v-1H3v-2h2v-4H3v-2h2V7H3V5h2V4a2 2 0 0 1 2-2h12c1.05 0 2 .95 2 2v6l-2 2V4zM5 5v2h2V5zm0 6v2h2v-2zm0 6v2h2v-2z"></svg:path>`,
})
export class MdiNotebookEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNotebookHeartIcon],svg[mdi-notebook-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 23.3l-.6-.5c-2-1.9-3.4-3.1-3.4-4.6c0-1.2 1-2.2 2.2-2.2c.7 0 1.4.3 1.8.8c.4-.5 1.1-.8 1.8-.8c1.2 0 2.2.9 2.2 2.2c0 1.5-1.4 2.7-3.4 4.6zM3 7V5h2V4a2 2 0 0 1 2-2h6v7l2.5-1.5L18 9V2h1c1.05 0 2 .95 2 2v9.34A6.005 6.005 0 0 0 13.8 22H7c-1.05 0-2-.95-2-2v-1H3v-2h2v-4H3v-2h2V7zm2-2v2h2V5zm0 14h2v-2H5zm0-6h2v-2H5z"></svg:path>`,
})
export class MdiNotebookHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNotebookHeartOutlineIcon],svg[mdi-notebook-heart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 23.3l-.6-.5c-2-1.9-3.4-3.1-3.4-4.6c0-1.2 1-2.2 2.2-2.2c.7 0 1.4.3 1.8.8c.4-.5 1.1-.8 1.8-.8c1.2 0 2.2.9 2.2 2.2c0 1.5-1.4 2.7-3.4 4.6zM17 4v6l-2-2l-2 2V4H9v16h4.08c.12.72.37 1.39.72 2H7c-1.05 0-2-.95-2-2v-1H3v-2h2v-4H3v-2h2V7H3V5h2V4a2 2 0 0 1 2-2h12c1.05 0 2 .95 2 2v9.34c-.63-.22-1.3-.34-2-.34V4zM5 19h2v-2H5zm0-6h2v-2H5zm0-6h2V5H5z"></svg:path>`,
})
export class MdiNotebookHeartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNotebookMinusIcon],svg[mdi-notebook-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7V5h2V4c0-1.1.9-2 2-2h6v7l2.5-1.5L18 9V2h1c1 0 2 1 2 2v9.8c-.9-.5-1.9-.8-3-.8c-3.3 0-6 2.7-6 6c0 1.1.3 2.1.8 3H7c-1.1 0-2-1-2-2v-1H3v-2h2v-4H3v-2h2V7zm2-2v2h2V5zm0 14h2v-2H5zm0-6h2v-2H5zm9 5v2h8v-2z"></svg:path>`,
})
export class MdiNotebookMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNotebookMinusOutlineIcon],svg[mdi-notebook-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v6l-2-2l-2 2V4H9v16h3.1c.1.7.4 1.4.7 2H7c-1.1 0-2-1-2-2v-1H3v-2h2v-4H3v-2h2V7H3V5h2V4c0-1.1.9-2 2-2h12c1 0 2 1 2 2v9.8c-.6-.4-1.3-.6-2-.7V4zM5 19h2v-2H5zm0-6h2v-2H5zm0-6h2V5H5zm9 11v2h8v-2z"></svg:path>`,
})
export class MdiNotebookMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNotebookMultipleIcon],svg[mdi-notebook-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.05 9H7.06V6h1.99V4.03H7.06v-1c0-1.11.89-1.99 1.99-1.99h5.98V8l2.47-1.5L20 8V1.04h1c1.05 0 2 .96 2 1.99V17c0 1.03-.95 2-2 2H9.05c-1.05 0-1.99-.95-1.99-2v-1h1.99v-2H7.06v-3h1.99zM1 18h2v-3H1v-2h2v-3H1V8h2V5h2v3H3v2h2v3H3v2h2v3H3v2h2v1h16v2H5a2 2 0 0 1-2-2v-1H1z"></svg:path>`,
})
export class MdiNotebookMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNotebookOutlineIcon],svg[mdi-notebook-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v6l-2-2l-2 2V4H9v16h10V4zM3 7V5h2V4a2 2 0 0 1 2-2h12c1.05 0 2 .95 2 2v16c0 1.05-.95 2-2 2H7c-1.05 0-2-.95-2-2v-1H3v-2h2v-4H3v-2h2V7zm2-2v2h2V5zm0 14h2v-2H5zm0-6h2v-2H5z"></svg:path>`,
})
export class MdiNotebookOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNotebookPlusIcon],svg[mdi-notebook-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7V5h2V4c0-1.1.9-2 2-2h6v7l2.5-1.5L18 9V2h1c1 0 2 1 2 2v9.8c-.9-.5-1.9-.8-3-.8c-3.3 0-6 2.7-6 6c0 1.1.3 2.1.8 3H7c-1.1 0-2-1-2-2v-1H3v-2h2v-4H3v-2h2V7zm2-2v2h2V5zm0 14h2v-2H5zm0-6h2v-2H5zm12 2v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiNotebookPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNotebookPlusOutlineIcon],svg[mdi-notebook-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v6l-2-2l-2 2V4H9v16h3.1c.1.7.4 1.4.7 2H7c-1.1 0-2-1-2-2v-1H3v-2h2v-4H3v-2h2V7H3V5h2V4c0-1.1.9-2 2-2h12c1 0 2 1 2 2v9.8c-.6-.4-1.3-.6-2-.7V4zM5 19h2v-2H5zm0-6h2v-2H5zm0-6h2V5H5zm12 8v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiNotebookPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNotebookRemoveIcon],svg[mdi-notebook-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7V5h2V4c0-1.1.9-2 2-2h6v7l2.5-1.5L18 9V2h1c1 0 2 1 2 2v9.8c-.9-.5-1.9-.8-3-.8c-3.3 0-6 2.7-6 6c0 1.1.3 2.1.8 3H7c-1.1 0-2-1-2-2v-1H3v-2h2v-4H3v-2h2V7zm2-2v2h2V5zm0 14h2v-2H5zm0-6h2v-2H5zm15.1 2.5L18 17.6l-2.1-2.1l-1.4 1.4l2.1 2.1l-2.1 2.1l1.4 1.4l2.1-2.1l2.1 2.1l1.4-1.4l-2.1-2.1l2.1-2.1z"></svg:path>`,
})
export class MdiNotebookRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNotebookRemoveOutlineIcon],svg[mdi-notebook-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v6l-2-2l-2 2V4H9v16h3.1c.1.7.4 1.4.7 2H7c-1.1 0-2-1-2-2v-1H3v-2h2v-4H3v-2h2V7H3V5h2V4c0-1.1.9-2 2-2h12c1 0 2 1 2 2v9.8c-.6-.4-1.3-.6-2-.7V4zM5 19h2v-2H5zm0-6h2v-2H5zm0-6h2V5H5zm15.1 8.5L18 17.6l-2.1-2.1l-1.4 1.4l2.1 2.1l-2.1 2.1l1.4 1.4l2.1-2.1l2.1 2.1l1.4-1.4l-2.1-2.1l2.1-2.1z"></svg:path>`,
})
export class MdiNotebookRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNotificationClearAllIcon],svg[mdi-notification-clear-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 13h14v-2H5m-2 6h14v-2H3m4-8v2h14V7"></svg:path>`,
})
export class MdiNotificationClearAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNpmIcon],svg[mdi-npm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10v4h2v-3h1v3h1v-4zm5 0v5h2v-1h2v-4zm3 1v2h-1v-2zm2-1v4h2v-3h1v3h1v-3h1v3h1v-4zM3 9h18v6h-9v1H8v-1H3z"></svg:path>`,
})
export class MdiNpmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNpmVariantIcon],svg[mdi-npm-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 4H4v16h8V8h4v12h4V4" fill="currentColor"></svg:path>`,
})
export class MdiNpmVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNpmVariantOutlineIcon],svg[mdi-npm-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M3 3v18h18V3H3m3 3h12v12h-3V9h-3v9H6V6z" fill="currentColor"></svg:path>`,
})
export class MdiNpmVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNukeIcon],svg[mdi-nuke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.04 12H10v-1H5.5A3.5 3.5 0 0 1 2 7.5A3.5 3.5 0 0 1 5.5 4c1.03 0 1.95.44 2.59 1.15C8.5 3.35 10.08 2 12 2s3.5 1.35 3.91 3.15C16.55 4.44 17.47 4 18.5 4A3.5 3.5 0 0 1 22 7.5a3.5 3.5 0 0 1-3.5 3.5h-4.46zM10 16.9v-1.14H5v-2h14v2h-4.96v1.16L20 19.08c.58.21 1 .76 1 1.42a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 20.5c0-.66.42-1.21 1-1.42z"></svg:path>`,
})
export class MdiNukeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNullIcon],svg[mdi-null-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c1.85 0 3.55.78 4.9 2.1l1.7-2.17l1.58 1.23l-1.98 2.52C19.33 7.41 20 9.6 20 12c0 5.5-3.58 10-8 10c-1.85 0-3.55-.78-4.9-2.1l-1.7 2.17l-1.58-1.23l1.98-2.52C4.67 16.59 4 14.4 4 12C4 6.5 7.58 2 12 2m0 2c-3.31 0-6 3.58-6 8c0 1.73.41 3.33 1.11 4.64l8.56-10.97C14.66 4.62 13.38 4 12 4m0 16c3.31 0 6-3.58 6-8c0-1.73-.41-3.33-1.11-4.64L8.33 18.33C9.34 19.38 10.62 20 12 20"></svg:path>`,
})
export class MdiNullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumericIcon],svg[mdi-numeric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17V9H2V7h4v10zm18-2a2 2 0 0 1-2 2h-4v-2h4v-2h-2v-2h2V9h-4V7h4a2 2 0 0 1 2 2v1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1 1.5 1.5zm-8 0v2H8v-4a2 2 0 0 1 2-2h2V9H8V7h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v2z"></svg:path>`,
})
export class MdiNumericIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric0Icon],svg[mdi-numeric-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm0 2h2v6h-2z"></svg:path>`,
})
export class MdiNumeric0Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric0BoxIcon],svg[mdi-numeric-0-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-8 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm0 2h2v6h-2z"></svg:path>`,
})
export class MdiNumeric0BoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric0BoxMultipleIcon],svg[mdi-numeric-0-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v16h16v2H3a2 2 0 0 1-2-2V5zm18-4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm-8 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 2h2v6h-2z"></svg:path>`,
})
export class MdiNumeric0BoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric0BoxMultipleOutlineIcon],svg[mdi-numeric-0-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17V3H7v14zm0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 5v16h16v2H3a2 2 0 0 1-2-2V5zm10 0h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m0 2v6h2V7z"></svg:path>`,
})
export class MdiNumeric0BoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric0BoxOutlineIcon],svg[mdi-numeric-0-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19V5H5v14zm0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-8 4h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2m0 2v6h2V9z"></svg:path>`,
})
export class MdiNumeric0BoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric0CircleIcon],svg[mdi-numeric-0-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm0 2h2v6h-2zm1-7a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiNumeric0CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric0CircleOutlineIcon],svg[mdi-numeric-0-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2m0 2v6h2V9zm1-7a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiNumeric0CircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric1Icon],svg[mdi-numeric-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7v2h2v8h2V7z"></svg:path>`,
})
export class MdiNumeric1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric1BoxIcon],svg[mdi-numeric-1-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17h-2V9h-2V7h4m5-4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiNumeric1BoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric1BoxMultipleIcon],svg[mdi-numeric-1-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v16h16v2H3a2 2 0 0 1-2-2V5zm18-4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm-7 14h2V5h-4v2h2z"></svg:path>`,
})
export class MdiNumeric1BoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric1BoxMultipleOutlineIcon],svg[mdi-numeric-1-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17H7V3h14m0-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2m-7 14h2V5h-4v2h2M3 5H1v16a2 2 0 0 0 2 2h16v-2H3z"></svg:path>`,
})
export class MdiNumeric1BoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric1BoxOutlineIcon],svg[mdi-numeric-1-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 14h2V7h-4v2h2"></svg:path>`,
})
export class MdiNumeric1BoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric1CircleIcon],svg[mdi-numeric-1-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7v2h2v8h2V7zm2-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiNumeric1CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric1CircleOutlineIcon],svg[mdi-numeric-1-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7h4v10h-2V9h-2zm2-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiNumeric1CircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric10Icon],svg[mdi-numeric-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7H6v2h2v8h2zm6 0h-2c-1.1 0-2 .9-2 2v6a2 2 0 0 0 2 2h2c1.11 0 2-.89 2-2V9a2 2 0 0 0-2-2m0 8h-2V9h2z"></svg:path>`,
})
export class MdiNumeric10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric10BoxIcon],svg[mdi-numeric-10-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 9h2v6h-2zm7-4v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2M10 7H6v2h2v8h2zm8 2a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2c1.11 0 2-.89 2-2z"></svg:path>`,
})
export class MdiNumeric10BoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric10BoxMultipleIcon],svg[mdi-numeric-10-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v16h16v2H3a2 2 0 0 1-2-2V5zm13 8h2V7h-2zm5-12H7c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V3a2 2 0 0 0-2-2m-9 14h-2V7H8V5h4zm8-2c0 1.11-.89 2-2 2h-2a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2z"></svg:path>`,
})
export class MdiNumeric10BoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric10BoxMultipleOutlineIcon],svg[mdi-numeric-10-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17V3H7v14zm0-16a2 2 0 0 1 2 2v14c0 1.11-.89 2-2 2H7a2 2 0 0 1-2-2V3c0-1.1.9-2 2-2zM3 5v16h16v2H3a2 2 0 0 1-2-2V5zm9 0H8v2h2v8h2zm6 0h-2c-1.1 0-2 .9-2 2v6a2 2 0 0 0 2 2h2c1.11 0 2-.89 2-2V7a2 2 0 0 0-2-2m0 8h-2V7h2z"></svg:path>`,
})
export class MdiNumeric10BoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric10BoxOutlineIcon],svg[mdi-numeric-10-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2M8 17h2V7H6v2h2m6-2h2a2 2 0 0 1 2 2v6c0 1.11-.89 2-2 2h-2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2m0 2v6h2V9z"></svg:path>`,
})
export class MdiNumeric10BoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric10CircleIcon],svg[mdi-numeric-10-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 9h2v6h-2zm8 3c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10M10 7H6v2h2v8h2zm8 2a2 2 0 0 0-2-2h-2c-1.1 0-2 .9-2 2v6a2 2 0 0 0 2 2h2c1.11 0 2-.89 2-2z"></svg:path>`,
})
export class MdiNumeric10CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric10CircleOutlineIcon],svg[mdi-numeric-10-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8m-2 3H6v2h2v8h2zm6 0h-2c-1.1 0-2 .9-2 2v6a2 2 0 0 0 2 2h2c1.11 0 2-.89 2-2V9a2 2 0 0 0-2-2m0 8h-2V9h2z"></svg:path>`,
})
export class MdiNumeric10CircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric2Icon],svg[mdi-numeric-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v2h4v2h-2a2 2 0 0 0-2 2v4h6v-2h-4v-2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></svg:path>`,
})
export class MdiNumeric2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric2BoxIcon],svg[mdi-numeric-2-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 11a2 2 0 0 1-2 2h-2v2h4v2H9v-4a2 2 0 0 1 2-2h2V9H9V7h4a2 2 0 0 1 2 2m4-6H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiNumeric2BoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric2BoxMultipleIcon],svg[mdi-numeric-2-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v16h16v2H3a2 2 0 0 1-2-2V5zm14 8h-4v-2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4v2h4v2h-2a2 2 0 0 0-2 2v4h6zm4-12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z"></svg:path>`,
})
export class MdiNumeric2BoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric2BoxMultipleOutlineIcon],svg[mdi-numeric-2-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 13h-4v-2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4v2h4v2h-2a2 2 0 0 0-2 2v4h6m4 2H7V3h14m0-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2M3 5H1v16a2 2 0 0 0 2 2h16v-2H3z"></svg:path>`,
})
export class MdiNumeric2BoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric2BoxOutlineIcon],svg[mdi-numeric-2-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15h-4v-2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H9v2h4v2h-2a2 2 0 0 0-2 2v4h6m4 2H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiNumeric2BoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric2CircleIcon],svg[mdi-numeric-2-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v2h4v2h-2a2 2 0 0 0-2 2v4h6v-2h-4v-2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiNumeric2CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric2CircleOutlineIcon],svg[mdi-numeric-2-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v2h4v2H9v-4a2 2 0 0 1 2-2h2V9H9zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiNumeric2CircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric3Icon],svg[mdi-numeric-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15v-1.5a1.5 1.5 0 0 0-1.5-1.5a1.5 1.5 0 0 0 1.5-1.5V9a2 2 0 0 0-2-2H9v2h4v2h-2v2h2v2H9v2h4a2 2 0 0 0 2-2"></svg:path>`,
})
export class MdiNumeric3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric3BoxIcon],svg[mdi-numeric-3-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 10.5a1.5 1.5 0 0 1-1.5 1.5c.84 0 1.5.67 1.5 1.5V15c0 1.11-.89 2-2 2H9v-2h4v-2h-2v-2h2V9H9V7h4c1.11 0 2 .89 2 2m4-6H5c-1.09 0-2 .9-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiNumeric3BoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric3BoxMultipleIcon],svg[mdi-numeric-3-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v16h16v2H3a2 2 0 0 1-2-2V5zm14 8v-1.5a1.5 1.5 0 0 0-1.5-1.5A1.5 1.5 0 0 0 17 8.5V7a2 2 0 0 0-2-2h-4v2h4v2h-2v2h2v2h-4v2h4a2 2 0 0 0 2-2m4-12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z"></svg:path>`,
})
export class MdiNumeric3BoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric3BoxMultipleOutlineIcon],svg[mdi-numeric-3-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 13v-1.5a1.5 1.5 0 0 0-1.5-1.5A1.5 1.5 0 0 0 17 8.5V7a2 2 0 0 0-2-2h-4v2h4v2h-2v2h2v2h-4v2h4a2 2 0 0 0 2-2M3 5H1v16a2 2 0 0 0 2 2h16v-2H3m18-4H7V3h14m0-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiNumeric3BoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric3BoxOutlineIcon],svg[mdi-numeric-3-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15v-1.5a1.5 1.5 0 0 0-1.5-1.5a1.5 1.5 0 0 0 1.5-1.5V9a2 2 0 0 0-2-2H9v2h4v2h-2v2h2v2H9v2h4a2 2 0 0 0 2-2m4 4H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiNumeric3BoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric3CircleIcon],svg[mdi-numeric-3-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15v-1.5a1.5 1.5 0 0 0-1.5-1.5a1.5 1.5 0 0 0 1.5-1.5V9a2 2 0 0 0-2-2H9v2h4v2h-2v2h2v2H9v2h4a2 2 0 0 0 2-2M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiNumeric3CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric3CircleOutlineIcon],svg[mdi-numeric-3-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15a2 2 0 0 1-2 2H9v-2h4v-2h-2v-2h2V9H9V7h4a2 2 0 0 1 2 2v1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1 1.5 1.5zM12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiNumeric3CircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric4Icon],svg[mdi-numeric-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v6h4v4h2V7h-2v4h-2V7z"></svg:path>`,
})
export class MdiNumeric4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric4BoxIcon],svg[mdi-numeric-4-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17h-2v-4H9V7h2v4h2V7h2m4-4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiNumeric4BoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric4BoxMultipleIcon],svg[mdi-numeric-4-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v16h16v2H3a2 2 0 0 1-2-2V5zm18-4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm-6 14h2V5h-2v4h-2V5h-2v6h4z"></svg:path>`,
})
export class MdiNumeric4BoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric4BoxMultipleOutlineIcon],svg[mdi-numeric-4-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17H7V3h14m0-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2m-6 14h2V5h-2v4h-2V5h-2v6h4M3 5H1v16a2 2 0 0 0 2 2h16v-2H3z"></svg:path>`,
})
export class MdiNumeric4BoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric4BoxOutlineIcon],svg[mdi-numeric-4-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-6 14h2V7h-2v4h-2V7H9v6h4"></svg:path>`,
})
export class MdiNumeric4BoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric4CircleIcon],svg[mdi-numeric-4-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v6h4v4h2V7h-2v4h-2V7zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiNumeric4CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric4CircleOutlineIcon],svg[mdi-numeric-4-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h2v4h2V7h2v10h-2v-4H9zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiNumeric4CircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric5Icon],svg[mdi-numeric-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v6h4v2H9v2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2V9h4V7z"></svg:path>`,
})
export class MdiNumeric5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric5BoxIcon],svg[mdi-numeric-5-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 9h-4v2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H9v-2h4v-2H9V7h6m4-4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiNumeric5BoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric5BoxMultipleIcon],svg[mdi-numeric-5-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v16h16v2H3a2 2 0 0 1-2-2V5zm18-4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm-4 12v-2a2 2 0 0 0-2-2h-2V7h4V5h-6v6h4v2h-4v2h4a2 2 0 0 0 2-2"></svg:path>`,
})
export class MdiNumeric5BoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric5BoxMultipleOutlineIcon],svg[mdi-numeric-5-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 13v-2a2 2 0 0 0-2-2h-2V7h4V5h-6v6h4v2h-4v2h4a2 2 0 0 0 2-2M3 5H1v16a2 2 0 0 0 2 2h16v-2H3m18-4H7V3h14m0-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiNumeric5BoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric5BoxOutlineIcon],svg[mdi-numeric-5-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15v-2a2 2 0 0 0-2-2h-2V9h4V7H9v6h4v2H9v2h4a2 2 0 0 0 2-2m4 4H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiNumeric5BoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric5CircleIcon],svg[mdi-numeric-5-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7v6h4v2H9v2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2V9h4V7zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiNumeric5CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric5CircleOutlineIcon],svg[mdi-numeric-5-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h6v2h-4v2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H9v-2h4v-2H9zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiNumeric5CircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric6Icon],svg[mdi-numeric-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2V9h4V7zm0 6h2v2h-2z"></svg:path>`,
})
export class MdiNumeric6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric6BoxIcon],svg[mdi-numeric-6-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 9h-4v2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4m4-4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-8 12h2v-2h-2z"></svg:path>`,
})
export class MdiNumeric6BoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric6BoxMultipleIcon],svg[mdi-numeric-6-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11h2v2h-2zM3 5v16h16v2H3a2 2 0 0 1-2-2V5zm18-4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm-8 14h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2V7h4V5h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2"></svg:path>`,
})
export class MdiNumeric6BoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric6BoxMultipleOutlineIcon],svg[mdi-numeric-6-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11h2v2h-2m0 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2V7h4V5h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2m8 2H7V3h14m0-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2M3 5H1v16a2 2 0 0 0 2 2h16v-2H3z"></svg:path>`,
})
export class MdiNumeric6BoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric6BoxOutlineIcon],svg[mdi-numeric-6-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13h2v2h-2m0 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2V9h4V7h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2m8 2H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiNumeric6BoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric6CircleIcon],svg[mdi-numeric-6-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2V9h4V7zm0 6h2v2h-2zm1-11a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiNumeric6CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric6CircleOutlineIcon],svg[mdi-numeric-6-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7h4v2h-4v2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2m0 6v2h2v-2zm1-11a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiNumeric6CircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric7Icon],svg[mdi-numeric-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 17l4-8V7H9v2h4l-4 8"></svg:path>`,
})
export class MdiNumeric7Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric7BoxIcon],svg[mdi-numeric-7-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-8 14l4-8V7H9v2h4l-4 8z"></svg:path>`,
})
export class MdiNumeric7BoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric7BoxMultipleIcon],svg[mdi-numeric-7-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v16h16v2H3a2 2 0 0 1-2-2V5zm10 10l4-8V5h-6v2h4l-4 8zm8-14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z"></svg:path>`,
})
export class MdiNumeric7BoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric7BoxMultipleOutlineIcon],svg[mdi-numeric-7-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 15l4-8V5h-6v2h4l-4 8m10 2H7V3h14m0-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2M3 5H1v16a2 2 0 0 0 2 2h16v-2H3z"></svg:path>`,
})
export class MdiNumeric7BoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric7BoxOutlineIcon],svg[mdi-numeric-7-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 17l4-8V7H9v2h4l-4 8m10 2H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiNumeric7BoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric7CircleIcon],svg[mdi-numeric-7-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 17l4-8V7H9v2h4l-4 8zm1-15a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiNumeric7CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric7CircleOutlineIcon],svg[mdi-numeric-7-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17H9l4-8H9V7h6v2zm1-15a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiNumeric7CircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric8Icon],svg[mdi-numeric-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13h2v2h-2m0-6h2v2h-2m0 6h2a2 2 0 0 0 2-2v-1.5a1.5 1.5 0 0 0-1.5-1.5a1.5 1.5 0 0 0 1.5-1.5V9a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1.5a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 9 13.5V15a2 2 0 0 0 2 2"></svg:path>`,
})
export class MdiNumeric8Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric8BoxIcon],svg[mdi-numeric-8-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-8 14h2a2 2 0 0 0 2-2v-1.5a1.5 1.5 0 0 0-1.5-1.5a1.5 1.5 0 0 0 1.5-1.5V9a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1.5a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 9 13.5V15a2 2 0 0 0 2 2m0-4h2v2h-2zm0-4h2v2h-2z"></svg:path>`,
})
export class MdiNumeric8BoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric8BoxMultipleIcon],svg[mdi-numeric-8-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11h2v2h-2zm0-4h2v2h-2zM3 5v16h16v2H3a2 2 0 0 1-2-2V5zm10 10h2a2 2 0 0 0 2-2v-1.5a1.5 1.5 0 0 0-1.5-1.5A1.5 1.5 0 0 0 17 8.5V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0-1.5 1.5V13a2 2 0 0 0 2 2m8-14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z"></svg:path>`,
})
export class MdiNumeric8BoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric8BoxMultipleOutlineIcon],svg[mdi-numeric-8-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11h2v2h-2m0-6h2v2h-2m0 6h2a2 2 0 0 0 2-2v-1.5a1.5 1.5 0 0 0-1.5-1.5A1.5 1.5 0 0 0 17 8.5V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0-1.5 1.5V13a2 2 0 0 0 2 2m8 2H7V3h14m0-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2M3 5H1v16a2 2 0 0 0 2 2h16v-2H3z"></svg:path>`,
})
export class MdiNumeric8BoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric8BoxOutlineIcon],svg[mdi-numeric-8-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13h2v2h-2m0-6h2v2h-2m0 6h2a2 2 0 0 0 2-2v-1.5a1.5 1.5 0 0 0-1.5-1.5a1.5 1.5 0 0 0 1.5-1.5V9a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1.5a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 9 13.5V15a2 2 0 0 0 2 2m8 2H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiNumeric8BoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric8CircleIcon],svg[mdi-numeric-8-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13h2v2h-2zm0-4h2v2h-2zm0 8h2a2 2 0 0 0 2-2v-1.5a1.5 1.5 0 0 0-1.5-1.5a1.5 1.5 0 0 0 1.5-1.5V9a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1.5a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 9 13.5V15a2 2 0 0 0 2 2m1-15a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiNumeric8CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric8CircleOutlineIcon],svg[mdi-numeric-8-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13v2h2v-2zm0-4v2h2V9zm0 8a2 2 0 0 1-2-2v-1.5a1.5 1.5 0 0 1 1.5-1.5A1.5 1.5 0 0 1 9 10.5V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1 1.5 1.5V15a2 2 0 0 1-2 2zm1-15a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiNumeric8CircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric9Icon],svg[mdi-numeric-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2H9v2zm0-6h-2V9h2z"></svg:path>`,
})
export class MdiNumeric9Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric9BoxIcon],svg[mdi-numeric-9-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-6 8h-2V9h2zm0-4h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2H9v2h4a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiNumeric9BoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric9BoxMultipleIcon],svg[mdi-numeric-9-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 9h-2V7h2zM3 5v16h16v2H3a2 2 0 0 1-2-2V5zm12 0h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2h-4v2h4a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m6-4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z"></svg:path>`,
})
export class MdiNumeric9BoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric9BoxMultipleOutlineIcon],svg[mdi-numeric-9-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 9h-2V7h2m0-2h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2h-4v2h4a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m6 12H7V3h14m0-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2M3 5H1v16a2 2 0 0 0 2 2h16v-2H3z"></svg:path>`,
})
export class MdiNumeric9BoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric9BoxOutlineIcon],svg[mdi-numeric-9-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11h-2V9h2m0-2h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2H9v2h4a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2m6 12H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiNumeric9BoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric9CircleIcon],svg[mdi-numeric-9-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m1 15a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2H9v2zm0-6h-2V9h2z"></svg:path>`,
})
export class MdiNumeric9CircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric9CircleOutlineIcon],svg[mdi-numeric-9-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17H9v-2h4v-2h-2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2m0-6V9h-2v2zm-1-9a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiNumeric9CircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric9PlusIcon],svg[mdi-numeric-9-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11h-2V9h-2v2h-2v2h2v2h2v-2h2zm-9-4H8c-1.1 0-2 .9-2 2v2a2 2 0 0 0 2 2h2v2H6v2h4c1.11 0 2-.89 2-2V9a2 2 0 0 0-2-2m0 4H8V9h2z"></svg:path>`,
})
export class MdiNumeric9PlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric9PlusBoxIcon],svg[mdi-numeric-9-plus-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2m-2 6h-2V9h-2v2h-2v2h2v2h2v-2h2zm-9-4H8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2H6v2h4a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M8 9h2v2H8z"></svg:path>`,
})
export class MdiNumeric9PlusBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric9PlusBoxMultipleIcon],svg[mdi-numeric-9-plus-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9V8h1v1zm10-8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 5v16h16v2H3a2 2 0 0 1-2-2V5zm12 4v2h2v2h2v-2h2V9h-2V7h-2v2zm-1 3V8a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v1H9v2h3a2 2 0 0 0 2-2"></svg:path>`,
})
export class MdiNumeric9PlusBoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric9PlusBoxMultipleOutlineIcon],svg[mdi-numeric-9-plus-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9h-2V7h-2v2h-2v2h2v2h2v-2h2v6H7V3h14m0-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2M11 9V8h1v1m2 3V8a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v1H9v2h3a2 2 0 0 0 2-2M3 5H1v16a2 2 0 0 0 2 2h16v-2H3z"></svg:path>`,
})
export class MdiNumeric9PlusBoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric9PlusBoxOutlineIcon],svg[mdi-numeric-9-plus-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11h-2V9h-2v2h-2v2h2v2h2v-2h2v6H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M9 11v-1h1v1m2 3v-4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v1H7v2h3a2 2 0 0 0 2-2"></svg:path>`,
})
export class MdiNumeric9PlusBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric9PlusCircleIcon],svg[mdi-numeric-9-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11h-2V9h-2v2h-2v2h2v2h2v-2h2zm-9-4H8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2H6v2h4a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M8 9h2v2H8zm4-7a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiNumeric9PlusCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric9PlusCircleOutlineIcon],svg[mdi-numeric-9-plus-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11v2h-2v2h-2v-2h-2v-2h2V9h2v2zm-9-4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6v-2h4v-2H8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zM8 9v2h2V9zm4-7a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiNumeric9PlusCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumericNegative1Icon],svg[mdi-numeric-negative-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7v2h2v8h2V7zm-2 6H5v-2h6z"></svg:path>`,
})
export class MdiNumericNegative1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumericOffIcon],svg[mdi-numeric-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l4 4H2v2h2v8h2V7.9l3.3 3.3c-.8.2-1.3 1-1.3 1.8v4h6v-1.1l6.8 6.8zM10 15v-2h1.1l2 2zm4-4.2L10.2 7H12c1.1 0 2 .9 2 2zM20 9h-4V7h4c1.1 0 2 .9 2 2v1.5c0 .8-.7 1.5-1.5 1.5c.8 0 1.5.7 1.5 1.5V15c0 1-.8 1.9-1.8 2l-2-2H20v-2h-2v-2h2z"></svg:path>`,
})
export class MdiNumericOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNumericPositive1Icon],svg[mdi-numeric-positive-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7v2h2v8h2V7zm-2 6H9v2H7v-2H5v-2h2V9h2v2h2z"></svg:path>`,
})
export class MdiNumericPositive1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNutIcon],svg[mdi-nut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88zM12 7a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5"></svg:path>`,
})
export class MdiNutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNutritionIcon],svg[mdi-nutrition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 18a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-2h12zM4 3h10a2 2 0 0 1 2 2v9H8v5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 3v2h2V6zm10 2V6H8v2zM4 10v2h2v-2zm4 0v2h6v-2zm-4 4v2h2v-2z"></svg:path>`,
})
export class MdiNutritionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiNuxtIcon],svg[mdi-nuxt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.8 18.36L16.03 8.08c-.1-.08-.4-.65-1-.65c-.25 0-.6.1-.96.65l-.74 1.18l-2.02-3.61c-.05-.1-.4-.65-1-.65c-.25 0-.65.1-.95.65L2.18 18.31c-.05.1-.35.69-.05 1.19c.1.25.4.5 1.06.5h17.66c.1 0 .75 0 1.05-.5c.1-.24.2-.64-.1-1.14m-13.7-.05l-.15.55H3.24l7.12-12.52l2.3 4.13zm1.11.55l4.11-7.2l4.18 7.2zm9.53 0l-.2-.55L14 10.46l1.03-1.73l5.72 10.13z"></svg:path>`,
})
export class MdiNuxtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOarIcon],svg[mdi-oar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.23 15.21c-1.46-1.46-5.26-5.01-7.46-3.94L4.5 3L3 4.5l8.28 8.29c-.98 2.21 2.6 5.83 4.07 7.29c1.76 1.76 2.91.84 4.26-.51c1.49-1.49 2-2.96.62-4.36"></svg:path>`,
})
export class MdiOarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOcarinaIcon],svg[mdi-ocarina-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12c-3.2-1.6-6.6-2.3-9.2-2.7L9.7 5.9c-.4-1.1-2-1.1-2.4 0L6.3 9C3.9 9.4 2 11.5 2 14c0 2.8 2.2 5 5 5c0 0 7 0 13-3c0 0 2-1 2-2s-2-2-2-2M5 14c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1m2 3c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1m2-3c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1m2 3c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1m5-3c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1m3 1c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1"></svg:path>`,
})
export class MdiOcarinaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOciIcon],svg[mdi-oci-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v20h20V2m-2.88 17.03H4.87V5h14.26v14.03m-4.3-8.32h2.86v6.88h-2.86m0-11.18h2.86v2.86h-2.86M6.3 6.41v11.18h7.1v-2.87H9.17V9.28h4.23V6.41Z"></svg:path>`,
})
export class MdiOciIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOcrIcon],svg[mdi-ocr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5v14h12v-2h-2c-1.11 0-2-.89-2-2V9c0-1.11.89-2 2-2h2V5m0 2v2h2V7m-2 2h-2v6h2m0 0v2h2v-2M5 7h2c1.11 0 2 .89 2 2v6c0 1.11-.89 2-2 2H5c-1.11 0-2-.89-2-2V9c0-1.11.89-2 2-2m12 0v10h2v-4h1v1h1v3h2v-3h-1v-2h1V8h-1V7M5 9v6h2V9m12 0h2v2h-2Z"></svg:path>`,
})
export class MdiOcrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOctagonIcon],svg[mdi-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27"></svg:path>`,
})
export class MdiOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOctagonOutlineIcon],svg[mdi-octagon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.27 3L3 8.27v7.46L8.27 21h7.46C17.5 19.24 21 15.73 21 15.73V8.27L15.73 3M9.1 5h5.8L19 9.1v5.8L14.9 19H9.1L5 14.9V9.1"></svg:path>`,
})
export class MdiOctagonOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOctagramIcon],svg[mdi-octagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.2 16.06L3.88 12L2.2 7.94l4.06-1.68L7.94 2.2L12 3.88l4.06-1.68l1.68 4.06l4.06 1.68L20.12 12l1.68 4.06l-4.06 1.68l-1.68 4.06L12 20.12L7.94 21.8l-1.68-4.06z"></svg:path>`,
})
export class MdiOctagramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOctagramEditIcon],svg[mdi-octagram-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.2 16.06L3.88 12L2.2 7.94l4.06-1.68L7.94 2.2L12 3.88l4.06-1.68l1.68 4.06l4.06 1.68l-.86 2.06c-.56.06-1.12.3-1.56.75L11 19.13v1.4L7.94 21.8l-1.68-4.06zm17.63-2.93l.98-.98c.19-.2.52-.2.72 0l1.32 1.32c.2.2.2.53 0 .72l-.98.98zm1.34 2.75L15.04 22H13v-2.04l6.13-6.13z"></svg:path>`,
})
export class MdiOctagramEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOctagramEditOutlineIcon],svg[mdi-octagram-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.88 12L2.2 16.06l4.06 1.68l1.68 4.06L11 20.53v-2.17l-2 .83l-1.21-2.98L4.81 15l1.24-3l-1.24-3l2.98-1.21L9 4.81l3 1.24l3-1.24l1.21 2.98L19.19 9l-1.24 3l.05.13l1.38-1.38c.44-.45 1-.69 1.56-.75l.86-2.06l-4.06-1.68l-1.68-4.06L12 3.88L7.94 2.2L6.26 6.26L2.2 7.94zm18.97 1.47l-1.32-1.32c-.2-.2-.53-.2-.72 0l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72M13 19.96V22h2.04l6.13-6.12l-2.04-2.05z"></svg:path>`,
})
export class MdiOctagramEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOctagramMinusIcon],svg[mdi-octagram-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.2 16.06L3.88 12L2.2 7.94l4.06-1.68L7.94 2.2L12 3.88l4.06-1.68l1.68 4.06l4.06 1.68L20.12 12l.51 1.22c-.52-.14-1.07-.22-1.63-.22c-3.31 0-6 2.69-6 6c0 .56.08 1.11.22 1.63L12 20.12L7.94 21.8l-1.68-4.06zM15 20v-2h8v2z"></svg:path>`,
})
export class MdiOctagramMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOctagramMinusOutlineIcon],svg[mdi-octagram-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.2 16.06L3.88 12L2.2 7.94l4.06-1.68L7.94 2.2L12 3.88l4.06-1.68l1.68 4.06l4.06 1.68L20.12 12l.51 1.22c-.52-.14-1.07-.22-1.63-.22c-.21 0-.42 0-.62.03L17.95 12l1.24-3l-2.98-1.21L15 4.81l-3 1.24l-3-1.24l-1.21 2.98L4.81 9l1.24 3l-1.24 3l2.98 1.21L9 19.19l3-1.24l1.03.43c-.03.2-.03.41-.03.62c0 .56.08 1.11.22 1.63L12 20.12L7.94 21.8l-1.68-4.06zM15 18v2h8v-2z"></svg:path>`,
})
export class MdiOctagramMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOctagramOutlineIcon],svg[mdi-octagram-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.2 16.06L3.88 12L2.2 7.94l4.06-1.68L7.94 2.2L12 3.88l4.06-1.68l1.68 4.06l4.06 1.68L20.12 12l1.68 4.06l-4.06 1.68l-1.68 4.06L12 20.12L7.94 21.8l-1.68-4.06zM4.81 9l1.24 3l-1.24 3l2.98 1.21L9 19.19l3-1.24l3 1.24l1.21-2.98L19.19 15l-1.24-3l1.24-3l-2.98-1.21L15 4.81l-3 1.24l-3-1.24l-1.21 2.98z"></svg:path>`,
})
export class MdiOctagramOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOctagramPlusIcon],svg[mdi-octagram-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.2 16.06L3.88 12L2.2 7.94l4.06-1.68L7.94 2.2L12 3.88l4.06-1.68l1.68 4.06l4.06 1.68L20.12 12l.51 1.22c-.52-.14-1.07-.22-1.63-.22c-3.31 0-6 2.69-6 6c0 .56.08 1.11.22 1.63L12 20.12L7.94 21.8l-1.68-4.06zM20 20h3v-2h-3v-3h-2v3h-3v2h3v3h2z"></svg:path>`,
})
export class MdiOctagramPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOctagramPlusOutlineIcon],svg[mdi-octagram-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.2 16.06L3.88 12L2.2 7.94l4.06-1.68L7.94 2.2L12 3.88l4.06-1.68l1.68 4.06l4.06 1.68L20.12 12l.51 1.22c-.52-.14-1.07-.22-1.63-.22c-.21 0-.42 0-.62.03L17.95 12l1.24-3l-2.98-1.21L15 4.81l-3 1.24l-3-1.24l-1.21 2.98L4.81 9l1.24 3l-1.24 3l2.98 1.21L9 19.19l3-1.24l1.03.43c-.03.2-.03.41-.03.62c0 .56.08 1.11.22 1.63L12 20.12L7.94 21.8l-1.68-4.06zM20 20h3v-2h-3v-3h-2v3h-3v2h3v3h2z"></svg:path>`,
})
export class MdiOctagramPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOctahedronIcon],svg[mdi-octahedron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.7 11.29h.01l-9-9C12.5 2.1 12.26 2 12 2s-.5.1-.71.29l-9 9h.01c-.39.39-.39 1.03 0 1.42h-.01l9 9c.21.19.45.29.71.29s.5-.1.71-.29l9-9h-.01c.39-.39.39-1.03 0-1.42M13 8.28V5.41l4.3 4.3zm-2 0L6.7 9.71l4.3-4.3zm1 1.77L17.84 12L12 13.95L6.16 12zm-1 5.67v2.87l-4.3-4.3zm2 0l4.3-1.43l-4.3 4.3z"></svg:path>`,
})
export class MdiOctahedronIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOctahedronOffIcon],svg[mdi-octahedron-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5.41V7.8l2.88 2.88L17.84 12l-1.98.66l2.95 2.95l2.9-2.9h-.01c.39-.39.39-1.03 0-1.42h.01l-9-9C12.5 2.1 12.26 2 12 2s-.5.1-.71.29l-2.9 2.9l1.42 1.42zm2 0l4.3 4.3L13 8.28zM2.39 1.73L1.11 3l4.74 4.74l-3.56 3.55h.01c-.39.39-.39 1.03 0 1.42h-.01l9 9c.21.19.45.29.71.29s.5-.1.71-.29l3.55-3.56l4.58 4.58l1.27-1.27zm4.87 7.42l.28.28l-.84.28zM11 18.59l-4.3-4.3l4.3 1.43zm1-4.64L6.16 12l2.96-1l2.92 2.93zm1 4.64v-2.87l.62-.22l1.23 1.24z"></svg:path>`,
})
export class MdiOctahedronOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOdnoklassnikiIcon],svg[mdi-odnoklassniki-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.83 12.74c-.28-.57-1.07-1.05-2.12-.24c-1.43 1.14-3.71 1.14-3.71 1.14s-2.28 0-3.71-1.14c-1.05-.81-1.84-.33-2.12.24c-.5 1 .06 1.49 1.33 2.3c1.09.7 2.58.96 3.54 1.06l-.8.8C9.1 18.03 8 19.12 7.25 19.88c-.45.46-.45 1.19 0 1.62l.14.16c.45.45 1.19.45 1.64 0L12 18.68c1.15 1.13 2.24 2.22 3 2.98c.45.45 1.18.45 1.64 0l.13-.16c.46-.43.46-1.16 0-1.62l-2.98-2.98l-.79-.81c.95-.09 2.42-.36 3.5-1.05c1.27-.81 1.83-1.3 1.33-2.3M12 4.57c1.38 0 2.5 1.12 2.5 2.49c0 1.38-1.12 2.49-2.5 2.49S9.5 8.44 9.5 7.06c0-1.37 1.12-2.49 2.5-2.49m0 7.55c2.8 0 5.06-2.26 5.06-5.06a5.06 5.06 0 1 0-10.12 0c0 2.8 2.26 5.06 5.06 5.06"></svg:path>`,
})
export class MdiOdnoklassnikiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOfferIcon],svg[mdi-offer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13c.6 0 1.1.2 1.4.6c.4.4.6.9.6 1.4l-8 3l-7-2V7h1.9l7.3 2.7c.5.2.8.6.8 1.1c0 .3-.1.6-.3.8s-.5.4-.9.4H14l-1.7-.7l-.3.9l2 .8zM2 7h4v11H2z"></svg:path>`,
})
export class MdiOfferIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOfficeBuildingIcon],svg[mdi-office-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3v18h6v-3.5h2V21h6V3zm2 2h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2H7zm8 0h2v2h-2z"></svg:path>`,
})
export class MdiOfficeBuildingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOfficeBuildingCogIcon],svg[mdi-office-building-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 13a.26.26 0 0 0-.26.21l-.19 1.32c-.3.13-.59.29-.85.47l-1.24-.5c-.11 0-.24 0-.31.13l-1 1.73c-.06.11-.04.24.06.32l1.06.82a4.2 4.2 0 0 0 0 1l-1.06.82a.26.26 0 0 0-.06.32l1 1.73c.06.13.19.13.31.13l1.24-.5c.26.18.54.35.85.47l.19 1.32c.02.12.12.21.26.21h2c.11 0 .22-.09.24-.21l.19-1.32c.3-.13.57-.29.84-.47l1.23.5c.13 0 .26 0 .33-.13l1-1.73a.26.26 0 0 0-.06-.32l-1.07-.82c.02-.17.04-.33.04-.5s-.01-.33-.04-.5l1.06-.82a.26.26 0 0 0 .06-.32l-1-1.73c-.06-.13-.19-.13-.32-.13l-1.23.5c-.27-.18-.54-.35-.85-.47l-.19-1.32A.236.236 0 0 0 18 13zm1 3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.84 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5m-1-5.42V3H2v18h6v-3.5h2.03c.23-3.3 2.74-5.96 5.97-6.42M6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm6-2h2v2h-2zm0 4h2v2h-2zm-2 6H8v-2h2zm0-4H8V9h2zM8 7V5h2v2z"></svg:path>`,
})
export class MdiOfficeBuildingCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOfficeBuildingCogOutlineIcon],svg[mdi-office-building-cog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 13a.26.26 0 0 0-.26.21l-.19 1.32c-.3.13-.59.29-.85.47l-1.24-.5c-.11 0-.24 0-.31.13l-1 1.73c-.06.11-.04.24.06.32l1.06.82a4.2 4.2 0 0 0 0 1l-1.06.82a.26.26 0 0 0-.06.32l1 1.73c.06.13.19.13.31.13l1.24-.5c.26.18.54.35.85.47l.19 1.32c.02.12.12.21.26.21h2c.11 0 .22-.09.24-.21l.19-1.32c.3-.13.57-.29.84-.47l1.23.5c.13 0 .26 0 .33-.13l1-1.73a.26.26 0 0 0-.06-.32l-1.07-.82c.02-.17.04-.33.04-.5s-.01-.33-.04-.5l1.06-.82a.26.26 0 0 0 .06-.32l-1-1.73c-.06-.13-.19-.13-.32-.13l-1.23.5c-.27-.18-.54-.35-.85-.47l-.19-1.32A.236.236 0 0 0 19 13zm1 3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.84 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5M10 5h2v2h-2zm6 2h-2V5h2zm-2 2h2v2h-2zm-4 0h2v2h-2zm3.11 14H2V1h18v10.29c-.63-.18-1.3-.29-2-.29V3H4v18h6v-3.5h1.03c-.03.17-.03.33-.03.5c0 1.96.81 3.73 2.11 5M8 15H6v-2h2zm0-4H6V9h2zm0-4H6V5h2zM6 17h2v2H6zm4-4h2v1.41c-.11.19-.22.39-.32.59H10z"></svg:path>`,
})
export class MdiOfficeBuildingCogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOfficeBuildingMarkerIcon],svg[mdi-office-building-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.19 21C14.12 19.43 13 17.36 13 15.5c0-1.83.96-3.5 2.4-4.5H15V9h2v1.23c.5-.14 1-.23 1.5-.23c.17 0 .34 0 .5.03V3H5v18h6v-3.5h2V21zM15 5h2v2h-2zM9 19H7v-2h2zm0-4H7v-2h2zm0-4H7V9h2zm0-4H7V5h2zm2-2h2v2h-2zm0 4h2v2h-2zm0 6v-2h2v2zm7.5-3c-1.9 0-3.5 1.61-3.5 3.5c0 2.61 3.5 6.5 3.5 6.5s3.5-3.89 3.5-6.5c0-1.89-1.6-3.5-3.5-3.5m0 4.81c-.7 0-1.2-.6-1.2-1.2c0-.7.6-1.2 1.2-1.2s1.2.59 1.2 1.2c.1.6-.5 1.2-1.2 1.2"></svg:path>`,
})
export class MdiOfficeBuildingMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOfficeBuildingMarkerOutlineIcon],svg[mdi-office-building-marker-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 9h2v2h-2zm2-4h-2v2h2zm-6 10h2v-2h-2zm2-10h-2v2h2zm-2 6h2V9h-2zM9 5H7v2h2zm0 4H7v2h2zm5.55 12H13v-3.5h-2V21H5V3h14v8.03c.71.06 1.39.28 2 .6V1H3v22h12.91c-.41-.56-.91-1.24-1.36-2M7 19h2v-2H7zm2-6H7v2h2zm13 3.5c0 2.6-3.5 6.5-3.5 6.5S15 19.1 15 16.5c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5m-2.3.1c0-.6-.6-1.2-1.2-1.2s-1.2.5-1.2 1.2c0 .6.5 1.2 1.2 1.2s1.3-.6 1.2-1.2"></svg:path>`,
})
export class MdiOfficeBuildingMarkerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOfficeBuildingMinusIcon],svg[mdi-office-building-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.4 21c-.2-.6-.4-1.3-.4-2c0-1.5.6-2.9 1.5-4H13v-2h2v1.5c.6-.5 1.3-.9 2-1.2V3H3v18h6v-3.5h2V21zM13 5h2v2h-2zm0 4h2v2h-2zM7 19H5v-2h2zm0-4H5v-2h2zm0-4H5V9h2zm0-4H5V5h2zm2-2h2v2H9zm0 4h2v2H9zm0 6v-2h2v2zm14 3v2h-8v-2z"></svg:path>`,
})
export class MdiOfficeBuildingMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOfficeBuildingMinusOutlineIcon],svg[mdi-office-building-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11h-2V9h2zm2 0h2V9h-2zm-.6 10H12v-3.5h-2V21H4V3h14v10.1c.3-.1.7-.1 1-.1s.7 0 1 .1V1H2v22h12.5c-.5-.6-.9-1.3-1.1-2M14 7h2V5h-2zm2 6.8V13h-2v2h.5q.75-.75 1.5-1.2M8 5H6v2h2zm0 4H6v2h2zM6 19h2v-2H6zm6-14h-2v2h2zm-2 10h2v-2h-2zm-2-2H6v2h2zm7 5v2h8v-2z"></svg:path>`,
})
export class MdiOfficeBuildingMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOfficeBuildingOutlineIcon],svg[mdi-office-building-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3v18h-6v-3.5h-2V21H5V3zm-4 4h2V5h-2zm-4 0h2V5h-2zM7 7h2V5H7zm8 4h2V9h-2zm-4 0h2V9h-2zm-4 0h2V9H7zm8 4h2v-2h-2zm-4 0h2v-2h-2zm-4 0h2v-2H7zm8 4h2v-2h-2zm-8 0h2v-2H7zM21 1H3v22h18z"></svg:path>`,
})
export class MdiOfficeBuildingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOfficeBuildingPlusIcon],svg[mdi-office-building-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.4 21c-.2-.6-.4-1.3-.4-2c0-1.5.6-2.9 1.5-4H13v-2h2v1.5c.6-.5 1.3-.9 2-1.2V3H3v18h6v-3.5h2V21zM13 5h2v2h-2zm0 4h2v2h-2zM7 19H5v-2h2zm0-4H5v-2h2zm0-4H5V9h2zm0-4H5V5h2zm2-2h2v2H9zm0 4h2v2H9zm0 6v-2h2v2zm11 0v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"></svg:path>`,
})
export class MdiOfficeBuildingPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOfficeBuildingPlusOutlineIcon],svg[mdi-office-building-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11h-2V9h2zm2 0h2V9h-2zm-.6 10H12v-3.5h-2V21H4V3h14v10.1c.3-.1.7-.1 1-.1s.7 0 1 .1V1H2v22h12.5c-.5-.6-.9-1.3-1.1-2M14 7h2V5h-2zm2 6.8V13h-2v2h.5q.75-.75 1.5-1.2M8 5H6v2h2zm0 4H6v2h2zM6 19h2v-2H6zm6-14h-2v2h2zm-2 10h2v-2h-2zm-2-2H6v2h2zm10 2v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiOfficeBuildingPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOfficeBuildingRemoveIcon],svg[mdi-office-building-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.4 21c-.2-.6-.4-1.3-.4-2c0-1.5.6-2.9 1.5-4H13v-2h2v1.5c.6-.5 1.3-.9 2-1.2V3H3v18h6v-3.5h2V21zM13 5h2v2h-2zm0 4h2v2h-2zM7 19H5v-2h2zm0-4H5v-2h2zm0-4H5V9h2zm0-4H5V5h2zm2-2h2v2H9zm0 4h2v2H9zm0 6v-2h2v2zm13.5 1.9L20.4 19l2.1 2.1l-1.4 1.4l-2.1-2.1l-2.1 2.1l-1.4-1.4l2.1-2.1l-2.1-2.1l1.4-1.4l2.1 2.1l2.1-2.1z"></svg:path>`,
})
export class MdiOfficeBuildingRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOfficeBuildingRemoveOutlineIcon],svg[mdi-office-building-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11h-2V9h2zm2 0h2V9h-2zm-.6 10H12v-3.5h-2V21H4V3h14v10.1c.3-.1.7-.1 1-.1s.7 0 1 .1V1H2v22h12.5c-.5-.6-.9-1.3-1.1-2M14 7h2V5h-2zm2 6.8V13h-2v2h.5q.75-.75 1.5-1.2M8 5H6v2h2zm0 4H6v2h2zM6 19h2v-2H6zm6-14h-2v2h2zm-2 10h2v-2h-2zm-2-2H6v2h2zm13.1 2.5L19 17.6l-2.1-2.1l-1.4 1.4l2.1 2.1l-2.1 2.1l1.4 1.4l2.1-2.1l2.1 2.1l1.4-1.4l-2.1-2.1l2.1-2.1z"></svg:path>`,
})
export class MdiOfficeBuildingRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOilIcon],svg[mdi-oil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.5s2 2.17 2 3.5a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.33 2-3.5 2-3.5M6 6h4a1 1 0 0 1 1 1a1 1 0 0 1-1 1H9v2h2c.74 0 1.39.4 1.73 1l6.51-3.76l3.26 1.89c.5.27.64.87.37 1.37c-.28.47-.87.64-1.37.36l-2.1-1.21l-3.65 6.32c-.34.61-1 1.03-1.75 1.03H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h2V8H6a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-1 6v3h9l2.06-3.57l-3.46 2l-.91-1.43zM.38 9.21L2.09 7.5c.41-.39 1.02-.39 1.41 0s.39 1 0 1.41l-1.71 1.71c-.39.38-1.02.38-1.41 0C0 10.23 0 9.6.38 9.21"></svg:path>`,
})
export class MdiOilIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOilLampIcon],svg[mdi-oil-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20h11v2H5m6-17h-1a2 2 0 0 0-2 2h5a2 2 0 0 0-2-2m5 3h6a2 2 0 0 1-2 2h-1a4 4 0 0 0-4 4v1a4 4 0 0 1-4 4h-1a4 4 0 0 1-4-4H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m2 2H4v3h2m13-8a2 2 0 0 1 2 2h1a2.9 2.9 0 0 0-3-3a2 2 0 0 1-2-2h-1a2.9 2.9 0 0 0 3 3"></svg:path>`,
})
export class MdiOilLampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOilLevelIcon],svg[mdi-oil-level-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18c-1.33 0-2.21.79-2.71 1.29S4.67 20 4 20s-.79-.21-1.29-.71c-.36-.36-.92-.87-1.71-1.13v2.25c.09.09.18.18.29.3c.5.5 1.38 1.29 2.71 1.29s2.21-.79 2.71-1.29S7.33 20 8 20s.79.21 1.29.71c.44.43 1.15 1.09 2.21 1.25c.16.04.33.04.5.04c1.33 0 2.21-.79 2.71-1.29S15.33 20 16 20s.79.21 1.29.71S18.67 22 20 22s2.21-.79 2.71-1.29c.11-.12.2-.21.29-.3v-2.25c-.79.26-1.35.77-1.71 1.13c-.5.5-.62.71-1.29.71s-.79-.21-1.29-.71S17.33 18 16 18s-2.21.79-2.71 1.29s-.62.71-1.29.71c-.22 0-.37-.03-.5-.08c-.28-.1-.45-.29-.79-.63C10.21 18.79 9.33 18 8 18m14-7.5s2 2.17 2 3.5c0 1.1-.9 2-2 2s-2-.9-2-2c0-1.33 2-3.5 2-3.5m.5-3.37l-3.26-1.89L12.73 9c-.34-.6-.99-1-1.73-1H9V6h1c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1h1v2H5c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h9c.75 0 1.41-.42 1.75-1.03l3.65-6.32l2.1 1.21c.5.28 1.09.11 1.37-.36c.27-.5.13-1.1-.37-1.37M14 13H5v-3h6.69l.91 1.43l3.46-2zM3.5 6.92l-1.71 1.7A1 1 0 0 1 .38 7.21L2.09 5.5a1 1 0 0 1 1.41 0c.39.39.39 1 0 1.42"></svg:path>`,
})
export class MdiOilLevelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOilTemperatureIcon],svg[mdi-oil-temperature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5h3V3h-3V2c0-.6-.4-1-1-1s-1 .4-1 1v13.3c-.6.3-1 1-1 1.7c0 1.1.9 2 2 2s2-.9 2-2c0-.7-.4-1.4-1-1.7V13h3v-2h-3V9h3V7h-3zm12 12.5s2 2.2 2 3.5c0 1.1-.9 2-2 2s-2-.9-2-2c0-1.3 2-3.5 2-3.5m.9-2c-.3.5-.9.6-1.4.4l-2.1-1.2l-3.6 6.3c-.3.6-1 1-1.8 1H5c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2v5h9l2.1-3.6l-3.1 1.8v-2.4l6.2-3.6l3.3 1.9c.5.3.6.9.4 1.4M3.5 13.9l-1.7 1.7c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l1.7-1.7c.4-.4 1-.4 1.4 0s.4 1 0 1.4"></svg:path>`,
})
export class MdiOilTemperatureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOmIcon],svg[mdi-om-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 2l-1.5 1.5L15 5l1.5-1.5zm-4 1c-1 6 6 7 9 3l-2-1.5C17 6 13 8 11 3M9 7C7 7 4.5 8.5 4.5 8.5L6 11c1-1 3-1.5 4-1c2 1-1 3-3 2v3.5c3-1.5 5 .5 4 2C8 22 3 16 3 13c-2 6 3 9 6 9s5-2 3.5-7H14c-1.5 4.5 4 9 7 3c1-2 1-8.5-4-8.5c-4 0-3 5.5-6.5 4C14 10 12 7 9 7m10 5c3 3-4 9-4 3c0-2 2-4.5 4-3"></svg:path>`,
})
export class MdiOmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOmegaIcon],svg[mdi-omega-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.15 19h-5.76v-2.13c2.11-1.62 3.2-3.63 3.2-6.03c0-1.5-.43-2.68-1.27-3.55C14.47 6.42 13.37 6 12.03 6c-1.35 0-2.46.42-3.32 1.3c-.87.87-1.3 2.07-1.3 3.58c0 2.38 1.09 4.38 3.2 5.99V19H4.85v-2.13h3.56c-2.37-1.55-3.56-3.64-3.56-6.27c0-2.1.65-3.74 1.96-4.94c1.31-1.21 3.03-1.81 5.16-1.81c2.18 0 3.92.6 5.22 1.79c1.31 1.19 1.96 2.86 1.96 4.94c0 2.63-1.2 4.73-3.6 6.29h3.6z"></svg:path>`,
})
export class MdiOmegaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOneUpIcon],svg[mdi-one-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 19c-.6 0-1-.4-1-1v-1c0-.5.4-1 1-1c.5 0 1 .4 1 1v1c0 .6-.4 1-1 1m5-1v-1c0-.5-.4-1-1-1c-.5 0-1 .4-1 1v1c0 .5.4 1 1 1s1-.4 1-1m7-6c0 2.6-1.6 4.9-4 6.4V20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1.6c-2.4-1.5-4-3.8-4-6.4A10 10 0 0 1 12 2a10 10 0 0 1 10 10M7 10c0-1.1-.6-2.1-1.5-2.6C4.5 8.7 4 10.3 4 12c0 .3 0 .7.1 1c1.6-.1 2.9-1.4 2.9-3m2-1c0 1.7 1.3 3 3 3s3-1.3 3-3s-1.3-3-3-3s-3 1.3-3 3m7 11v-4.5c-1.2-.3-2.6-.5-4-.5s-2.8.2-4 .5V20zm3.9-7c.1-.3.1-.7.1-1c0-1.7-.5-3.3-1.5-4.6c-.9.5-1.5 1.5-1.5 2.6c0 1.6 1.3 2.9 2.9 3"></svg:path>`,
})
export class MdiOneUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOnedriveIcon],svg[mdi-onedrive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21.5 16.87A4.037 4.037 0 0 1 17.94 19H7c-1.64 0-3.17-.8-4.1-2.14c-.57-.82-.9-1.79-.9-2.79A5.002 5.002 0 0 1 6.93 9a6.27 6.27 0 0 1 3.67-2.62c3.34-.88 6.75 1.16 7.61 4.5l-.01.01c.58.04 1.15.2 1.66.47a4.047 4.047 0 0 1 1.64 5.51z" fill="currentColor"></svg:path>`,
})
export class MdiOnedriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOnenoteIcon],svg[mdi-onenote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M1.96 4.8L14 3.08V5h7a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v8h-6v2L1.96 19.21V4.8M11 16.75v-8.5L9 8.5v4.25l-2-4L5 9v7l1.5.25v-5.5L9 16.5l2 .25M14 14h4v-1h-4v1m0-3h4v-1h-4v1m0-3h4V7h-4v1m0 8v1h4v-1h-4z" fill="currentColor"></svg:path>`,
})
export class MdiOnenoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOnepasswordIcon],svg[mdi-onepassword-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11s11-4.92 11-11S18.08 1 12 1m0 19a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m1-6.5c0 .63.4 1.2 1 1.41V18h-4v-6.09c.78-.27 1.19-1.11.93-1.91a1.5 1.5 0 0 0-.93-.91V6h4v6.09c-.6.21-1 .78-1 1.41"></svg:path>`,
})
export class MdiOnepasswordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOpacityIcon],svg[mdi-opacity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.66 8L12 2.35L6.34 8A8.02 8.02 0 0 0 4 13.64c0 2 .78 4.11 2.34 5.67a7.99 7.99 0 0 0 11.32 0c1.56-1.56 2.34-3.67 2.34-5.67S19.22 9.56 17.66 8M6 14c0-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 18 12 18 14z"></svg:path>`,
})
export class MdiOpacityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOpenInAppIcon],svg[mdi-open-in-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 10l-4 4h3v6h2v-6h3m3-10H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-2H5V8h14v10h-4v2h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiOpenInAppIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOpenInNewIcon],svg[mdi-open-in-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"></svg:path>`,
})
export class MdiOpenInNewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOpenSourceInitiativeIcon],svg[mdi-open-source-initiative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.41 22h-.19a.46.46 0 0 1-.26-.27l-2.22-5.8c-.09-.24.03-.51.26-.61c.71-.26 1.28-.82 1.58-1.49c.64-1.43 0-3.1-1.43-3.74s-3.1 0-3.74 1.41c-.3.71-.32 1.5-.05 2.19c.3.74.89 1.31 1.64 1.59c.24.09.37.36.28.61L9 21.69c-.04.12-.13.22-.25.27c-.12.04-.25.04-.36 0C3.24 19.97.67 14.18 2.66 9.03s7.78-7.72 12.93-5.73c2.47.96 4.46 2.85 5.54 5.27a9.9 9.9 0 0 1 .2 7.65c-1.01 2.66-3.1 4.78-5.75 5.78zM12 3.59c-4.97-.13-9.1 3.8-9.23 8.77a9.01 9.01 0 0 0 5.55 8.54l1.89-4.9c-1.83-1-2.52-3.28-1.53-5.11a3.784 3.784 0 0 1 5.11-1.53a3.775 3.775 0 0 1 0 6.64l1.89 4.93a9.1 9.1 0 0 0 4.76-5c1.84-4.62-.4-9.85-5.02-11.7A9.1 9.1 0 0 0 12 3.59"></svg:path>`,
})
export class MdiOpenSourceInitiativeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOpenidIcon],svg[mdi-openid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 2l-3 1.5v16.44C7 19.5 4 17.46 4 15c0-2.25 2.5-4.15 6-4.78V8.19c-5.14.69-9 3.47-9 6.81c0 3.56 4.36 6.5 10 6.94h.09L14 20.5zm1 6.19v2.03c1.15.21 2.18.55 3.06 1L16.5 12l6.5 1.5l-.5-4.5l-2 1C19 9.12 17.12 8.47 15 8.19"></svg:path>`,
})
export class MdiOpenidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOperaIcon],svg[mdi-opera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.04 17.07c-1-1.17-1.64-2.91-1.69-4.86v-.42c.05-1.95.69-3.69 1.69-4.86c.82-.98 1.89-1.56 3.06-1.56c2.62 0 4.74 2.97 4.74 6.63s-2.12 6.63-4.74 6.63c-1.17 0-1.77-.13-3.06-1.56M12.03 3H12a9 9 0 0 0-9 9c0 4.83 3.8 8.77 8.57 9H12c2.3 0 4.4-.87 6-2.29c1.84-1.65 3-4.04 3-6.71s-1.16-5.06-3-6.71A8.94 8.94 0 0 0 12.03 3"></svg:path>`,
})
export class MdiOperaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOrbitIcon],svg[mdi-orbit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.11 1.75C9.3 1.25 10.62 1 12 1c6.08 0 11 4.92 11 11s-4.92 11-11 11S1 18.08 1 12c0-1.38.25-2.7.72-3.92a4.5 4.5 0 0 0 1.73 1.1C3.16 10.07 3 11 3 12a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 0 0-9-9c-1 0-1.93.16-2.82.45c-.22-.62-.57-1.21-1.07-1.7M4.93 2.93a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5"></svg:path>`,
})
export class MdiOrbitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOrbitVariantIcon],svg[mdi-orbit-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 8l-4 4h3c0 3.31-2.69 6-6 6c-1 0-1.97-.25-2.8-.7l-1.46 1.46A7.93 7.93 0 0 0 12 20c4.42 0 8-3.58 8-8h3M6 12c0-3.31 2.69-6 6-6c1 0 1.97.25 2.8.7l1.46-1.46A7.93 7.93 0 0 0 12 4c-4.42 0-8 3.58-8 8H1l4 4l4-4m5 0c0 1.11-.89 2-2 2s-2-.89-2-2s.9-2 2-2s2 .9 2 2"></svg:path>`,
})
export class MdiOrbitVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOrderAlphabeticalAscendingIcon],svg[mdi-order-alphabetical-ascending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5h10v2H12m0 12v-2h10v2m-10-8h10v2H12m-3 0v2l-3.33 4H9v2H3v-2l3.33-4H3v-2M7 3H5c-1.1 0-2 .9-2 2v6h2V9h2v2h2V5a2 2 0 0 0-2-2m0 4H5V5h2Z"></svg:path>`,
})
export class MdiOrderAlphabeticalAscendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOrderAlphabeticalDescendingIcon],svg[mdi-order-alphabetical-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13H5c-1.1 0-2 .9-2 2v6h2v-2h2v2h2v-6a2 2 0 0 0-2-2m0 4H5v-2h2M9 3v2L5.67 9H9v2H3V9l3.33-4H3V3m9 2h10v2H12m0 12v-2h10v2m-10-8h10v2H12Z"></svg:path>`,
})
export class MdiOrderAlphabeticalDescendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOrderBoolAscendingIcon],svg[mdi-order-bool-ascending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3C3.79 3 2 4.79 2 7s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m0 4c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m6-8h10v2H12zm0 14v-2h10v2zm0-8h10v2H12z"></svg:path>`,
})
export class MdiOrderBoolAscendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOrderBoolAscendingVariantIcon],svg[mdi-order-bool-ascending-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2h4c1.11 0 2-.89 2-2v-4c0-1.11-.89-2-2-2m.2 1.5l1.06 1.05l-3.99 3.95l-2.53-2.55l1.07-1.05l1.47 1.49M4 3c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2h4c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2M4 5h4v4H4m8-4h10v2H12m0 12v-2h10v2m-10-8h10v2H12Z"></svg:path>`,
})
export class MdiOrderBoolAscendingVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOrderBoolDescendingIcon],svg[mdi-order-bool-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 13c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2M6 3C3.79 3 2 4.79 2 7s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m6 2h10v2H12zm0 14v-2h10v2zm0-8h10v2H12z"></svg:path>`,
})
export class MdiOrderBoolDescendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOrderBoolDescendingVariantIcon],svg[mdi-order-bool-descending-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2h4c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2m.2 1.5l1.06 1.05L5.27 9.5L2.74 6.95L3.81 5.9l1.47 1.49M4 13c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2h4c1.11 0 2-.89 2-2v-4c0-1.11-.89-2-2-2m-4 2h4v4H4m8-14h10v2H12m0 12v-2h10v2m-10-8h10v2H12Z"></svg:path>`,
})
export class MdiOrderBoolDescendingVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOrderNumericAscendingIcon],svg[mdi-order-numeric-ascending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21H3v-2h4v-1H5a2 2 0 0 1-2-2v-1c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v4c0 1.11-.89 2-2 2m0-6H5v1h2M5 3h2a2 2 0 0 1 2 2v4c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 6h2V5H5m7 0h10v2H12m0 12v-2h10v2m-10-8h10v2H12Z"></svg:path>`,
})
export class MdiOrderNumericAscendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOrderNumericDescendingIcon],svg[mdi-order-numeric-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11H3V9h4V8H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v4c0 1.11-.89 2-2 2m0-6H5v1h2m-2 7h2a2 2 0 0 1 2 2v4c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2v-4c0-1.1.9-2 2-2m0 6h2v-4H5m7-10h10v2H12m0 12v-2h10v2m-10-8h10v2H12Z"></svg:path>`,
})
export class MdiOrderNumericDescendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOriginIcon],svg[mdi-origin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.13c0 .1-.05.2-.11.28c-.39.59-.73 1.23-.85 1.92l-.04.23l1-.06a7.5 7.5 0 0 1 7.5 7.5c0 1.62-.5 3.11-1.38 4.34c-1.39 2.34-3.4 4.31-5.78 5.63c-.09.03-.22.03-.28-.04c-.06-.1-.06-.23.03-.32c.38-.52.64-1.11.78-1.76l.06-.41l-.93.06A7.5 7.5 0 0 1 4.5 12c0-1.61.5-3.11 1.38-4.33C7.26 5.32 9.28 3.34 11.67 2c.11-.05.27 0 .33.13M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></svg:path>`,
})
export class MdiOriginIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOrnamentIcon],svg[mdi-ornament-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1a3 3 0 0 1 3 3v1a1 1 0 0 1 1 1v1.07c2.39 1.38 4 3.97 4 6.93a8 8 0 0 1-8 8a8 8 0 0 1-8-8c0-2.96 1.61-5.55 4-6.93V6a1 1 0 0 1 1-1V4a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v1h2V4a1 1 0 0 0-1-1m0 5c-1.78 0-3.37.77-4.47 2h8.94c-1.1-1.23-2.69-2-4.47-2m-5.66 8h1.25L6 14.43c.05.57.17 1.07.34 1.57m6.25 0l-4-4H6.41l4 4zm5.07-4h-1.25L18 13.57c-.05-.57-.17-1.07-.34-1.57m-6.25 0l4 4h2.18l-4-4zm.59 8c1.78 0 3.37-.77 4.47-2H7.53c1.1 1.23 2.69 2 4.47 2"></svg:path>`,
})
export class MdiOrnamentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOrnamentVariantIcon],svg[mdi-ornament-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1a3 3 0 0 1 3 3v1a1 1 0 0 1 1 1v1.07c2.39 1.38 4 3.97 4 6.93a8 8 0 0 1-8 8a8 8 0 0 1-8-8c0-2.96 1.61-5.55 4-6.93V6a1 1 0 0 1 1-1V4a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v1h2V4a1 1 0 0 0-1-1m0 5c-1.78 0-3.37.77-4.47 2h8.94c-1.1-1.23-2.69-2-4.47-2m0 12c1.78 0 3.37-.77 4.47-2H7.53c1.1 1.23 2.69 2 4.47 2m0-8a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m6 2c0-.69-.12-1.35-.33-2c-.95.19-1.67 1-1.67 2s.72 1.81 1.67 1.97c.21-.62.33-1.28.33-1.97M6 14c0 .69.12 1.35.33 1.97C7.28 15.81 8 15 8 14s-.72-1.81-1.67-2c-.21.65-.33 1.31-.33 2"></svg:path>`,
})
export class MdiOrnamentVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOutboxIcon],svg[mdi-outbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M14 14h-4v-3H8l4-4l4 4h-2v3m-9.01 1V5H19v10h-4a3 3 0 1 1-6 0H4.99M19 3H4.99c-1.104 0-1.98.895-1.98 2L3 19c0 1.105.886 2 1.99 2H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2" fill="currentColor"></svg:path>`,
})
export class MdiOutboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOutdentIcon],svg[mdi-outdent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M2 3h20v3H2V3zm7 5h13v3H9V8zm0 5h13v3H9v-3zm-7 5h20v3H2v-3zM6 8l-4 4l4 4h1V8H6z" fill="currentColor"></svg:path>`,
})
export class MdiOutdentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOutdoorLampIcon],svg[mdi-outdoor-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 22h-2c-1.1 0-2-.9-2-2v-5h6v5c0 1.1-.9 2-2 2m-8-8h14l-6-4.29V6c0-1.61-1.06-4-4-4S7 4.39 7 6c0 .45-.19 1-1 1H5V3H3v9h2V9h1c2.2 0 3-1.79 3-3c0-.33.1-2 2-2c1.83 0 2 1.54 2 2v3.71z"></svg:path>`,
})
export class MdiOutdoorLampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOutlookIcon],svg[mdi-outlook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M22 8v8c0 .6-.4 1-1 1h-7v4L2 19.2V4.8L14 3v4h7c.6 0 1 .4 1 1m-1 .1l-4 2.3l-3-1.7v1.6l3 1.7l4-2.3V8.1m-13.08.01c-2.1-.07-3.13 1.78-3.13 3.98s1.07 3.97 3.13 3.99c1.87.01 3.08-1.69 3.08-3.89c0-2.19-.87-4-3.08-4.08M7.61 9.7c.84 0 1.59.74 1.59 2.25c0 1.52-.75 2.36-1.59 2.36c-.83 0-1.51-1.11-1.51-2.36c0-1.24.68-2.25 1.51-2.25z" fill="currentColor"></svg:path>`,
})
export class MdiOutlookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOverscanIcon],svg[mdi-overscan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.5L10 8h4zm6 4.5v4l2.5-2zM6 10l-2.5 2L6 14zm8 6h-4l2 2.5zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H3V5h18z"></svg:path>`,
})
export class MdiOverscanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiOwlIcon],svg[mdi-owl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16c.56.84 1.31 1.53 2.2 2L12 20.2L9.8 18c.89-.47 1.65-1.16 2.2-2m5-4.8a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-10 0a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m10-2.5a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m-10 0a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4M2.24 1c1.76 3.7.49 6.46-.69 9.2c-.36.8-.55 1.63-.55 2.5a6 6 0 0 0 6 6c.21-.01.42-.02.63-.05l2.96 2.96L12 23l1.41-1.39l2.96-2.96c.21.03.42.04.63.05a6 6 0 0 0 6-6c0-.87-.19-1.7-.55-2.5C21.27 7.46 20 4.7 21.76 1c-2.64 2.06-6.4 3.69-9.76 3.7C8.64 4.69 4.88 3.06 2.24 1"></svg:path>`,
})
export class MdiOwlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPacManIcon],svg[mdi-pac-man-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 12l7.07 7.07a9.953 9.953 0 0 1-14.14 0C1 15.17 1 8.84 4.93 4.93C8.83 1 15.16 1 19.07 4.93zm7-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiPacManIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPackageIcon],svg[mdi-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.12 5h13.75l-.94-1h-12zm15.42.23c.29.34.46.77.46 1.27V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6.5c0-.5.17-.93.46-1.27l1.38-1.68C5.12 3.21 5.53 3 6 3h12c.47 0 .88.21 1.15.55zM6 18h6v-3H6z"></svg:path>`,
})
export class MdiPackageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPackageCheckIcon],svg[mdi-package-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3q-.75 0-1.2.6L3.5 5.2c-.3.4-.5.8-.5 1.3V19c0 1.1.9 2 2 2h8.3c-.2-.6-.3-1.3-.3-2c0-3.3 2.7-6 6-6c.7 0 1.4.1 2 .3V6.5c0-.5-.2-.9-.5-1.3l-1.4-1.7c-.2-.3-.6-.5-1.1-.5zm-.1 1h12l.9 1H5.1zM6 15h6v3H6zm15.3.8l-3.6 3.6l-1.6-1.6L15 19l2.8 3l4.8-4.8z"></svg:path>`,
})
export class MdiPackageCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPackageDownIcon],svg[mdi-package-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.12 5l.81-1h12l.94 1M12 17.5L6.5 12H10v-2h4v2h3.5zm8.54-12.27l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6 3 6.5V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.5c0-.5-.17-.93-.46-1.27"></svg:path>`,
})
export class MdiPackageDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPackageUpIcon],svg[mdi-package-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.54 5.23c.29.34.46.77.46 1.27V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6.5c0-.5.17-.93.46-1.27l1.38-1.68C5.12 3.21 5.53 3 6 3h12c.47 0 .88.21 1.15.55zM5.12 5h13.75l-.94-1h-12zM12 9.5L6.5 15H10v2h4v-2h3.5z"></svg:path>`,
})
export class MdiPackageUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPackageVariantIcon],svg[mdi-package-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10.96a.985.985 0 0 1-.37-1.37L3.13 7c.11-.2.28-.34.47-.42l7.83-4.4c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.19.1.35.26.44.46l1.45 2.52c.28.48.11 1.09-.36 1.36l-1 .58v4.96c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-5.54c-.3.17-.68.18-1 0m10-6.81v6.7l5.96-3.35zM5 15.91l6 3.38v-6.71L5 9.21zm14 0v-3.22l-5 2.9c-.33.18-.7.17-1 .01v3.69zm-5.15-2.55l6.28-3.63l-.58-1.01l-6.28 3.63z"></svg:path>`,
})
export class MdiPackageVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPackageVariantClosedIcon],svg[mdi-package-variant-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88zM12 4.15l-1.89 1.07L16 8.61l1.96-1.11zM6.04 7.5L12 10.85l1.96-1.1l-5.88-3.4zM5 15.91l6 3.38v-6.71L5 9.21zm14 0v-6.7l-6 3.37v6.71z"></svg:path>`,
})
export class MdiPackageVariantClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPackageVariantClosedCheckIcon],svg[mdi-package-variant-closed-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-.2 0-.4.1-.6.2L3.5 6.6c-.3.2-.5.5-.5.9v9c0 .4.2.7.5.9l7.9 4.4c.2.1.4.2.6.2s.4-.1.6-.2l.9-.5c-.3-.6-.4-1.3-.5-2v-6.7l6-3.4V13c.7 0 1.4.1 2 .3V7.5c0-.4-.2-.7-.5-.9l-7.9-4.4c-.2-.1-.4-.2-.6-.2m0 2.2l6 3.3l-2 1.1l-5.9-3.4zM8.1 6.3L14 9.8l-2 1.1l-6-3.4zM5 9.2l6 3.4v6.7l-6-3.4zm16.3 6.6l-3.6 3.6l-1.6-1.6L15 19l2.8 3l4.8-4.8z"></svg:path>`,
})
export class MdiPackageVariantClosedCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPackageVariantClosedMinusIcon],svg[mdi-package-variant-closed-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 12.6l6-3.4V13c.7 0 1.4.1 2 .4V7.5c0-.4-.2-.7-.5-.9l-7.9-4.4c-.2-.1-.4-.2-.6-.2s-.4.1-.6.2L3.5 6.6c-.3.2-.5.5-.5.9v9c0 .4.2.7.5.9l7.9 4.4c.2.1.4.2.6.2s.4-.1.6-.2l.9-.5c-.3-.6-.4-1.3-.5-2M12 4.2l6 3.3l-2 1.1l-5.9-3.4zm-1 15.1l-6-3.4V9.2l6 3.4zm1-8.5L6 7.5l2-1.2l6 3.5zM23 18v2h-8v-2z"></svg:path>`,
})
export class MdiPackageVariantClosedMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPackageVariantClosedPlusIcon],svg[mdi-package-variant-closed-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19.3v-6.7l6-3.4V13c.7 0 1.4.1 2 .4V7.5c0-.4-.2-.7-.5-.9l-7.9-4.4c-.2-.1-.4-.2-.6-.2s-.4.1-.6.2L3.5 6.6c-.3.2-.5.5-.5.9v9c0 .4.2.7.5.9l7.9 4.4c.2.1.4.2.6.2s.4-.1.6-.2l.9-.5c-.3-.6-.4-1.3-.5-2M12 4.2l6 3.3l-2 1.1l-5.9-3.4zm-1 15.1l-6-3.4V9.2l6 3.4zm1-8.5L6 7.5l2-1.2l6 3.5zm8 4.2v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"></svg:path>`,
})
export class MdiPackageVariantClosedPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPackageVariantClosedRemoveIcon],svg[mdi-package-variant-closed-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 12.6l6-3.4V13c.7 0 1.4.1 2 .4V7.5c0-.4-.2-.7-.5-.9l-7.9-4.4c-.2-.1-.4-.2-.6-.2s-.4.1-.6.2L3.5 6.6c-.3.2-.5.5-.5.9v9c0 .4.2.7.5.9l7.9 4.4c.2.1.4.2.6.2s.4-.1.6-.2l.9-.5c-.3-.6-.4-1.3-.5-2M12 4.2l6 3.3l-2 1.1l-5.9-3.4zm-1 15.1l-6-3.4V9.2l6 3.4zm1-8.5L6 7.5l2-1.2l6 3.5zm4.9 4.7l2.1 2.1l2.1-2.1l1.4 1.4l-2.1 2.1l2.1 2.1l-1.4 1.4l-2.1-2.1l-2.1 2.1l-1.4-1.4l2.1-2.1l-2.1-2.1z"></svg:path>`,
})
export class MdiPackageVariantClosedRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPackageVariantMinusIcon],svg[mdi-package-variant-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15.6c.3.2.7.2 1 0l5-2.9v.3c.7 0 1.4.1 2 .4v-1.8l1-.6c.5-.3.6-.9.4-1.4l-1.5-2.5c-.1-.2-.2-.4-.4-.5l-7.9-4.4c-.2-.1-.4-.2-.6-.2s-.4.1-.6.2L3.6 6.6c-.2.1-.4.2-.5.4L1.6 9.6c-.3.5-.1 1.1.4 1.4c.3.2.7.2 1 0v5.5c0 .4.2.7.5.9l7.9 4.4c.2.1.4.2.6.2s.4-.1.6-.2l.9-.5c-.3-.6-.4-1.3-.5-2m-2 0l-6-3.4V9.2l6 3.4zm9.1-9.6l-6.3 3.6l-.6-1l6.3-3.6zM12 10.8V4.2l6 3.3zM23 20h-8v-2h8z"></svg:path>`,
})
export class MdiPackageVariantMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPackageVariantPlusIcon],svg[mdi-package-variant-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15.6c.3.2.7.2 1 0l5-2.9v.3c.7 0 1.4.1 2 .4v-1.8l1-.6c.5-.3.6-.9.4-1.4l-1.5-2.5c-.1-.2-.2-.4-.4-.5l-7.9-4.4c-.2-.1-.4-.2-.6-.2s-.4.1-.6.2L3.6 6.6c-.2.1-.4.2-.5.4L1.6 9.6c-.3.5-.1 1.1.4 1.4c.3.2.7.2 1 0v5.5c0 .4.2.7.5.9l7.9 4.4c.2.1.4.2.6.2s.4-.1.6-.2l.9-.5c-.3-.6-.4-1.3-.5-2m-2 0l-6-3.4V9.2l6 3.4zm9.1-9.6l-6.3 3.6l-.6-1l6.3-3.6zM12 10.8V4.2l6 3.3zm8 4.2v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"></svg:path>`,
})
export class MdiPackageVariantPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPackageVariantRemoveIcon],svg[mdi-package-variant-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 15.6c.3.2.7.2 1 0l5-2.9v.3c.7 0 1.4.1 2 .4v-1.8l1-.6c.5-.3.6-.9.4-1.4l-1.5-2.5c-.1-.2-.2-.4-.4-.5l-7.9-4.4c-.2-.1-.4-.2-.6-.2s-.4.1-.6.2L3.6 6.6c-.2.1-.4.2-.5.4L1.6 9.6c-.3.5-.1 1.1.4 1.4c.3.2.7.2 1 0v5.5c0 .4.2.7.5.9l7.9 4.4c.2.1.4.2.6.2s.4-.1.6-.2l.9-.5c-.3-.6-.4-1.3-.5-2m-2 0l-6-3.4V9.2l6 3.4zm9.1-9.6l-6.3 3.6l-.6-1l6.3-3.6zM12 10.8V4.2l6 3.3zm10.5 6.1L20.4 19l2.1 2.1l-1.4 1.4l-2.1-2.1l-2.1 2.1l-1.4-1.4l2.1-2.1l-2.1-2.1l1.4-1.4l2.1 2.1l2.1-2.1z"></svg:path>`,
})
export class MdiPackageVariantRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPageFirstIcon],svg[mdi-page-first-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z"></svg:path>`,
})
export class MdiPageFirstIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPageLastIcon],svg[mdi-page-last-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z"></svg:path>`,
})
export class MdiPageLastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPageLayoutBodyIcon],svg[mdi-page-layout-body-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 6v8h12V8z"></svg:path>`,
})
export class MdiPageLayoutBodyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPageLayoutFooterIcon],svg[mdi-page-layout-footer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 14v4h12v-4z"></svg:path>`,
})
export class MdiPageLayoutFooterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPageLayoutHeaderIcon],svg[mdi-page-layout-header-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 2v4h12V4z"></svg:path>`,
})
export class MdiPageLayoutHeaderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPageLayoutHeaderFooterIcon],svg[mdi-page-layout-header-footer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m0 18H6v-4h12zm0-12H6V4h12z"></svg:path>`,
})
export class MdiPageLayoutHeaderFooterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPageLayoutSidebarLeftIcon],svg[mdi-page-layout-sidebar-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 6v8h4V8z"></svg:path>`,
})
export class MdiPageLayoutSidebarLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPageLayoutSidebarRightIcon],svg[mdi-page-layout-sidebar-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m8 6v8h4V8z"></svg:path>`,
})
export class MdiPageLayoutSidebarRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPageNextIcon],svg[mdi-page-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H5a2 2 0 0 0-2 2v6h4V9l4 3l-4 3v-2H3v6a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-3 14h-4v-2h4zm3-4h-7v-2h7zm0-4h-7V7h7zM3 13H0v-2h3z"></svg:path>`,
})
export class MdiPageNextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPageNextOutlineIcon],svg[mdi-page-next-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3H5a2 2 0 0 0-2 2v4h2V5h17v14H5v-4H3v4a2 2 0 0 0 2 2h17a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M7 15v-2H0v-2h7V9l4 3zm13-2h-7v-2h7zm0-4h-7V7h7zm-3 8h-4v-2h4z"></svg:path>`,
})
export class MdiPageNextOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPagePreviousIcon],svg[mdi-page-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21h15a2 2 0 0 0 2-2v-6h-4v2l-4-3l4-3v2h4V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2m0-6h4v2H4zm0-4h7v2H4zm0-4h7v2H4zm17 4h3v2h-3z"></svg:path>`,
})
export class MdiPagePreviousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPagePreviousOutlineIcon],svg[mdi-page-previous-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h17a2 2 0 0 1 2 2v4h-2V5H2v14h17v-4h2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m15 12v-2h7v-2h-7V9l-4 3zM4 13h7v-2H4zm0-4h7V7H4zm0 8h4v-2H4z"></svg:path>`,
})
export class MdiPagePreviousOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPailIcon],svg[mdi-pail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 7.63a.976.976 0 0 1 1.36.37c.28.47.11 1.09-.36 1.36l-8.23 4.75a.998.998 0 1 1-1-1.73zM7 21l-1.21-6.03l7.42-4.28c.79-.43 1.29-1.25 1.29-2.19a2.5 2.5 0 0 0-3.79-2.14L4.76 9.79L4 6H3V4h18v2h-1l-3 15z"></svg:path>`,
})
export class MdiPailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPailMinusIcon],svg[mdi-pail-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.5 9.36l-8.23 4.75a.998.998 0 1 1-1-1.73l8.23-4.75a.976.976 0 0 1 1.36.37c.28.47.11 1.09-.36 1.36M13 19c0-3.18 2.47-5.77 5.6-6L20 6h1V4H3v2h1l.76 3.79l5.95-3.43A2.5 2.5 0 0 1 14.5 8.5c0 .94-.5 1.76-1.29 2.19l-7.42 4.28L7 21h6.35c-.22-.63-.35-1.3-.35-2m2-1v2h8v-2z"></svg:path>`,
})
export class MdiPailMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPailMinusOutlineIcon],svg[mdi-pail-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6H3V4h18v2h-1l-1.4 7c-.77.07-1.49.26-2.15.58L17.96 6H6.04l.46 2.22l-1.85 1.05zm8.86 2a.976.976 0 0 0-1.36-.37l-8.23 4.75a.998.998 0 1 0 1 1.73l8.23-4.75c.47-.27.64-.89.36-1.36M13 19H8.64l-.91-4.57L5.9 15.5L7 21h6.35c-.22-.63-.35-1.3-.35-2m2-1v2h8v-2z"></svg:path>`,
})
export class MdiPailMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPailOffIcon],svg[mdi-pail-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.84 22.73l-3.49-3.49L17 21H7l-1.21-6.03l4.62-2.67l-1.1-1.1l-5.04 2.91a.998.998 0 1 1-1-1.73l4.58-2.64l-1.1-1.1l-1.99 1.15L4 6H3V4.89L1.11 3l1.28-1.27l19.72 19.73zM10.71 6.36A2.5 2.5 0 0 1 14.5 8.5c0 .77-.34 1.44-.9 1.9l4.6 4.6L20 6h1V4H7.2L10 6.78zm.79 1.27l-.42.25l1.45 1.45c.44-.28.6-.87.33-1.33a.976.976 0 0 0-1.36-.37"></svg:path>`,
})
export class MdiPailOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPailOffOutlineIcon],svg[mdi-pail-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.84 22.73l-3.49-3.49L17 21H7l-1.1-5.5l1.83-1.07l.91 4.57h6.72l.29-1.46l-6.34-6.34l-5.04 2.91a.998.998 0 1 1-1-1.73l4.58-2.64l-1.47-1.47l-1.73 1L4 6H3V4.89L1.11 3l1.28-1.27l19.72 19.73zM17.96 6l-1.46 7.3l1.7 1.7L20 6h1V4H7.2l2 2zM11.5 7.63l-.42.25l1.45 1.45c.44-.28.6-.87.33-1.33a.976.976 0 0 0-1.36-.37"></svg:path>`,
})
export class MdiPailOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPailOutlineIcon],svg[mdi-pail-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 7.63a.976.976 0 0 1 1.36.37c.28.47.11 1.09-.36 1.36l-8.23 4.75a.998.998 0 1 1-1-1.73zM3 4v2h1l.65 3.27L6.5 8.22L6.04 6h11.92l-2.6 13H8.64l-.91-4.57L5.9 15.5L7 21h10l3-15h1V4z"></svg:path>`,
})
export class MdiPailOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPailPlusIcon],svg[mdi-pail-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.5 9.36l-8.23 4.75a.998.998 0 1 1-1-1.73l8.23-4.75a.976.976 0 0 1 1.36.37c.28.47.11 1.09-.36 1.36M13 19c0-3.18 2.47-5.77 5.6-6L20 6h1V4H3v2h1l.76 3.79l5.95-3.43A2.5 2.5 0 0 1 14.5 8.5c0 .94-.5 1.76-1.29 2.19l-7.42 4.28L7 21h6.35c-.22-.63-.35-1.3-.35-2m5-4v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiPailPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPailPlusOutlineIcon],svg[mdi-pail-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6H3V4h18v2h-1l-1.4 7c-.77.07-1.49.26-2.15.58L17.96 6H6.04l.46 2.22l-1.85 1.05zm8.86 2a.976.976 0 0 0-1.36-.37l-8.23 4.75a.998.998 0 1 0 1 1.73l8.23-4.75c.47-.27.64-.89.36-1.36M13 19H8.64l-.91-4.57L5.9 15.5L7 21h6.35c-.22-.63-.35-1.3-.35-2m5-4v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiPailPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPailRemoveIcon],svg[mdi-pail-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.5 9.36l-8.23 4.75a.998.998 0 1 1-1-1.73l8.23-4.75a.976.976 0 0 1 1.36.37c.28.47.11 1.09-.36 1.36M13 19c0-3.18 2.47-5.77 5.6-6L20 6h1V4H3v2h1l.76 3.79l5.95-3.43A2.5 2.5 0 0 1 14.5 8.5c0 .94-.5 1.76-1.29 2.19l-7.42 4.28L7 21h6.35c-.22-.63-.35-1.3-.35-2m8.12-3.54L19 17.59l-2.12-2.13l-1.41 1.42L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19l2.13-2.12z"></svg:path>`,
})
export class MdiPailRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPailRemoveOutlineIcon],svg[mdi-pail-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6H3V4h18v2h-1l-1.4 7c-.77.07-1.49.26-2.15.58L17.96 6H6.04l.46 2.22l-1.85 1.05zm8.86 2a.976.976 0 0 0-1.36-.37l-8.23 4.75a.998.998 0 1 0 1 1.73l8.23-4.75c.47-.27.64-.89.36-1.36M13 19H8.64l-.91-4.57L5.9 15.5L7 21h6.35c-.22-.63-.35-1.3-.35-2m8.12-3.54L19 17.59l-2.12-2.13l-1.42 1.42L17.58 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.41-1.42L20.41 19l2.12-2.12z"></svg:path>`,
})
export class MdiPailRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPaletteIcon],svg[mdi-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 12a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 17.5 9a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-3-4A1.5 1.5 0 0 1 13 6.5A1.5 1.5 0 0 1 14.5 5A1.5 1.5 0 0 1 16 6.5A1.5 1.5 0 0 1 14.5 8m-5 0A1.5 1.5 0 0 1 8 6.5A1.5 1.5 0 0 1 9.5 5A1.5 1.5 0 0 1 11 6.5A1.5 1.5 0 0 1 9.5 8m-3 4A1.5 1.5 0 0 1 5 10.5A1.5 1.5 0 0 1 6.5 9A1.5 1.5 0 0 1 8 10.5A1.5 1.5 0 0 1 6.5 12M12 3a9 9 0 0 0-9 9a9 9 0 0 0 9 9a1.5 1.5 0 0 0 1.5-1.5c0-.39-.15-.74-.39-1c-.23-.27-.38-.62-.38-1a1.5 1.5 0 0 1 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8"></svg:path>`,
})
export class MdiPaletteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPaletteAdvancedIcon],svg[mdi-palette-advanced-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22H10v-2h12zM2 22v-2h7v2zm16-4v-8h4v8zm0-15h4v6h-4zM2 18V3h14v15zm7-3.44a3 3 0 0 0 3-3c0-2-3-5.37-3-5.37s-3 3.37-3 5.37a3 3 0 0 0 3 3"></svg:path>`,
})
export class MdiPaletteAdvancedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPaletteOutlineIcon],svg[mdi-palette-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22A10 10 0 0 1 2 12A10 10 0 0 1 12 2c5.5 0 10 4 10 9a6 6 0 0 1-6 6h-1.8c-.3 0-.5.2-.5.5c0 .1.1.2.1.3c.4.5.6 1.1.6 1.7c.1 1.4-1 2.5-2.4 2.5m0-18a8 8 0 0 0-8 8a8 8 0 0 0 8 8c.3 0 .5-.2.5-.5c0-.2-.1-.3-.1-.4c-.4-.5-.6-1-.6-1.6c0-1.4 1.1-2.5 2.5-2.5H16a4 4 0 0 0 4-4c0-3.9-3.6-7-8-7m-5.5 6c.8 0 1.5.7 1.5 1.5S7.3 13 6.5 13S5 12.3 5 11.5S5.7 10 6.5 10m3-4c.8 0 1.5.7 1.5 1.5S10.3 9 9.5 9S8 8.3 8 7.5S8.7 6 9.5 6m5 0c.8 0 1.5.7 1.5 1.5S15.3 9 14.5 9S13 8.3 13 7.5S13.7 6 14.5 6m3 4c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5"></svg:path>`,
})
export class MdiPaletteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPaletteSwatchIcon],svg[mdi-palette-swatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.53 19.65l1.34.56v-9.03l-2.43 5.86c-.41 1.02.06 2.19 1.09 2.61m19.5-3.7L17.07 4a2 2 0 0 0-1.81-1.25c-.26 0-.53.04-.79.15L7.1 5.95a2.02 2.02 0 0 0-1.23 1.8c-.01.25.04.54.13.8l5 11.95c.29.78 1.03 1.24 1.81 1.25c.26 0 .52-.05.77-.15l7.36-3.05a1.994 1.994 0 0 0 1.09-2.6M7.88 8.75a1 1 0 0 1-1-1a1 1 0 0 1 1-1c.55 0 1 .45 1 1s-.45 1-1 1m-2 11a2 2 0 0 0 2 2h1.45l-3.45-8.34z"></svg:path>`,
})
export class MdiPaletteSwatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPaletteSwatchOutlineIcon],svg[mdi-palette-swatch-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.5 19.6l1.3.6v-9L1.4 17c-.4 1.1.1 2.2 1.1 2.6M15.2 4.8l5 12l-7.3 3l-5-11.9v-.1zm.1-2c-.3 0-.5 0-.8.1L7.1 6c-.7.3-1.2 1-1.2 1.8c0 .2 0 .5.1.8l5 11.9c.3.8 1 1.2 1.8 1.2c.3 0 .5 0 .8-.1l7.4-3.1c1-.4 1.5-1.6 1.1-2.6L17.1 4c-.3-.8-1.1-1.2-1.8-1.2m-4.8 7.1c-.6 0-1-.4-1-1s.4-1 1-1s1 .5 1 1s-.4 1-1 1m-4.6 9.9c0 1.1.9 2 2 2h1.4l-3.4-8.3z"></svg:path>`,
})
export class MdiPaletteSwatchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPaletteSwatchVariantIcon],svg[mdi-palette-swatch-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14H6c-2.2 0-4 1.8-4 4s1.8 4 4 4h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2M6 20c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m.3-8L13 5.3c.8-.8 2-.8 2.8 0l2.8 2.8c.8.8.8 2 0 2.8l-.9 1.1zM2 13.5V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v1.5z"></svg:path>`,
})
export class MdiPaletteSwatchVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPalmTreeIcon],svg[mdi-palm-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9c1.59 7.61-2 13-2 13h3c1.88-5.8 1-9.91.5-12m2.16-2.84c.17.21.34.43.47.66a7.1 7.1 0 0 1-.63 8.44a7.11 7.11 0 0 0-.55-6.49c-.08-.13-.17-.24-.25-.36a7.1 7.1 0 0 0-2.16-1.98a7.13 7.13 0 0 0-4.96 6.79c0 .74.11 1.45.31 2.11a7.07 7.07 0 0 1-1.33-4.14c0-2.35 1.14-4.43 2.89-5.73C8 6.35 6.46 6.67 5.12 7.5q-.93.615-1.62 1.41C4.05 7.58 5 6.39 6.3 5.57c1.5-.94 3.2-1.25 4.84-1.01C10.73 4 10.23 3.47 9.63 3c-.58-.42-1.21-.76-1.87-1c1.44.04 2.88.5 4.11 1.43c.63.47 1.13 1.04 1.53 1.64c.1 0 .19-.01.29-.01c3.2 0 5.91 2.11 6.81 5.02a7.07 7.07 0 0 0-4.84-2.92"></svg:path>`,
})
export class MdiPalmTreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPanIcon],svg[mdi-pan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.5L8 7h8zM7 8l-4.5 4L7 16zm10 0v8l4.5-4zm-5 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-4 7l4 4.5l4-4.5z"></svg:path>`,
})
export class MdiPanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPanBottomLeftIcon],svg[mdi-pan-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-6.65 3L11 18.65L5 19z"></svg:path>`,
})
export class MdiPanBottomLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPanBottomRightIcon],svg[mdi-pan-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m1 8.65L18.65 13l.35 6z"></svg:path>`,
})
export class MdiPanBottomRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPanDownIcon],svg[mdi-pan-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-4 7l4 4.5l4-4.5z"></svg:path>`,
})
export class MdiPanDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPanHorizontalIcon],svg[mdi-pan-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 8l-4.5 4L7 16zm10 0v8l4.5-4zm-5 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiPanHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPanLeftIcon],svg[mdi-pan-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 8l-4.5 4L7 16zm5 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiPanLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPanRightIcon],svg[mdi-pan-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 8v8l4.5-4zm-5 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiPanRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPanTopLeftIcon],svg[mdi-pan-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-1-4.65L5.35 11L5 5z"></svg:path>`,
})
export class MdiPanTopLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPanTopRightIcon],svg[mdi-pan-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m6.65 1L13 5.35L19 5z"></svg:path>`,
})
export class MdiPanTopRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPanUpIcon],svg[mdi-pan-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.5L8 7h8zm0 7.5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiPanUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPanVerticalIcon],svg[mdi-pan-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.5L8 7h8zm0 7.5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-4 7l4 4.5l4-4.5z"></svg:path>`,
})
export class MdiPanVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPandaIcon],svg[mdi-panda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c1.74 0 3.36.5 4.74 1.35C17.38 3.53 18.38 3 19.5 3A3.5 3.5 0 0 1 23 6.5c0 1.5-.95 2.78-2.28 3.28c.18.72.28 1.45.28 2.22a9 9 0 0 1-9 9a9 9 0 0 1-9-9c0-.77.1-1.5.28-2.22A3.51 3.51 0 0 1 1 6.5A3.5 3.5 0 0 1 4.5 3c1.12 0 2.12.53 2.76 1.35C8.64 3.5 10.26 3 12 3m0 2a7 7 0 0 0-7 7a7 7 0 0 0 7 7a7 7 0 0 0 7-7a7 7 0 0 0-7-7m4.19 5.3c.36 1.33-.11 2.61-1.04 2.86c-.94.26-1.98-.62-2.34-1.96c-.36-1.33.11-2.61 1.04-2.86c.94-.25 1.98.62 2.34 1.96m-8.38 0c.36-1.34 1.4-2.21 2.34-1.96c.93.25 1.4 1.53 1.04 2.86c-.36 1.34-1.4 2.22-2.34 1.96c-.93-.25-1.4-1.53-1.04-2.86M12 14c.6 0 1.13.19 1.5.5l-1 1c0 .42.34.75.75.75a.75.75 0 0 0 .75-.75a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5a1.75 1.75 0 0 1-1.75 1.75c-.49 0-.93-.2-1.25-.53c-.32.33-.76.53-1.25.53A1.75 1.75 0 0 1 9 15.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5a.75.75 0 0 0 .75.75a.75.75 0 0 0 .75-.75l-1-1c.37-.31.9-.5 1.5-.5"></svg:path>`,
})
export class MdiPandaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPandoraIcon],svg[mdi-pandora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20a1 1 0 0 1-1 1H4V3h9.71a6.75 6.75 0 0 1 6.75 6.75c0 3.75-3.02 6.75-6.75 6.75H10z"></svg:path>`,
})
export class MdiPandoraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPanoramaIcon],svg[mdi-panorama-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.5 12.5l2.5 3l3.5-4.5l4.5 6H5m18 1V6a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2"></svg:path>`,
})
export class MdiPanoramaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPanoramaFisheyeIcon],svg[mdi-panorama-fisheye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2"></svg:path>`,
})
export class MdiPanoramaFisheyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPanoramaHorizontalIcon],svg[mdi-panorama-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.5c-3.9 0-6.9-.8-8.7-1.4c-.6-.3-1.3.2-1.3.9v14c0 .7.7 1.2 1.3 1c2.1-.7 4.8-1.5 8.7-1.5s6.7.8 8.7 1.5c.7.2 1.3-.3 1.3-1V5c0-.7-.7-1.2-1.3-.9c-2 .6-4.8 1.4-8.7 1.4"></svg:path>`,
})
export class MdiPanoramaHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPanoramaHorizontalOutlineIcon],svg[mdi-panorama-horizontal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.43 4c-.1 0-.2 0-.31.06C18.18 5.16 15.09 5.7 12 5.7s-6.18-.55-9.12-1.64C2.77 4 2.66 4 2.57 4c-.34 0-.57.23-.57.63v14.75c0 .39.23.62.57.62c.1 0 .2 0 .31-.06c2.94-1.1 6.03-1.64 9.12-1.64s6.18.55 9.12 1.64c.11.06.21.06.31.06c.33 0 .57-.23.57-.63V4.63c0-.4-.24-.63-.57-.63M20 6.54v10.91c-2.6-.77-5.28-1.16-8-1.16s-5.4.39-8 1.16V6.54c2.6.77 5.28 1.16 8 1.16c2.72.01 5.4-.38 8-1.16"></svg:path>`,
})
export class MdiPanoramaHorizontalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPanoramaOutlineIcon],svg[mdi-panorama-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H3V6h18zm-6.5-7L11 15.5l-2.5-3L5 17h14z"></svg:path>`,
})
export class MdiPanoramaOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPanoramaSphereIcon],svg[mdi-panorama-sphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8.1c-.3-.1-.7-.3-1-.4C19.4 4.3 16 2 12 2S4.6 4.3 3 7.7c-.3.1-.7.3-.9.4C1.4 8.5 1 9.2 1 9.9v4.2c0 .7.4 1.4 1 1.8c.3.1.7.3 1 .4c1.6 3.4 5 5.7 9 5.7s7.4-2.3 9-5.7c.3-.1.6-.3.9-.5c.6-.4 1.1-1 1.1-1.8V9.9c0-.7-.4-1.4-1-1.8M12 4c2.4 0 4.5 1 6 2.7c-1.8-.5-3.9-.7-6-.7s-4.2.2-5.9.7C7.5 5 9.6 4 12 4m0 16c-2.4 0-4.5-1-5.9-2.7c1.7.5 3.8.7 5.9.7s4.2-.2 6-.7C16.5 19 14.4 20 12 20"></svg:path>`,
})
export class MdiPanoramaSphereIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPanoramaSphereOutlineIcon],svg[mdi-panorama-sphere-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8.1c-.3-.1-.7-.3-1-.4C19.4 4.3 16 2 12 2S4.6 4.3 3 7.7c-.3.1-.7.3-.9.4C1.4 8.5 1 9.2 1 9.9v4.2c0 .7.4 1.4 1 1.8c.3.1.7.3 1 .4c1.6 3.4 5 5.7 9 5.7s7.4-2.3 9-5.7c.3-.1.6-.3.9-.5c.6-.4 1.1-1 1.1-1.8V9.9c0-.7-.4-1.4-1-1.8m-1 1.8v4.2c-2.2 1.2-5.5 1.9-9 1.9s-6.8-.7-9-1.9V9.9C5.2 8.7 8.5 8 12 8s6.8.7 9 1.9M12 4c2.4 0 4.5 1 6 2.7c-1.8-.5-3.9-.7-6-.7s-4.2.2-5.9.7C7.5 5 9.6 4 12 4m0 16c-2.4 0-4.5-1-5.9-2.7c1.7.5 3.8.7 5.9.7s4.2-.2 6-.7C16.5 19 14.4 20 12 20"></svg:path>`,
})
export class MdiPanoramaSphereOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPanoramaVariantIcon],svg[mdi-panorama-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.7 4.1c-2 .7-4.8 1.4-8.7 1.4s-6.9-.8-8.7-1.4C2.7 3.8 2 4.3 2 5v14c0 .7.7 1.2 1.3 1c2.1-.7 4.8-1.5 8.7-1.5s6.7.8 8.7 1.5c.7.2 1.3-.3 1.3-1V5c0-.7-.7-1.2-1.3-.9M12 15c-2.3 0-4.5.1-6.5.4L9.2 11l2 2.4L14 10l4.5 5.4c-2-.3-4.2-.4-6.5-.4"></svg:path>`,
})
export class MdiPanoramaVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPanoramaVariantOutlineIcon],svg[mdi-panorama-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4c-.6 0-3.6 1.5-9 1.5C6.7 5.5 3.5 4 3 4s-1 .4-1 1v14c0 .6.5 1 1 1c.6 0 3.5-1.5 9-1.5c5.4 0 8.4 1.5 9 1.5c.5 0 1-.4 1-1V5c0-.6-.5-1-1-1m-1 13.6c-2-.6-4.6-1.1-8-1.1s-6 .5-8 1.1V6.4c2.6.7 5.3 1.1 8 1.1c3.4 0 6-.5 8-1.1zM9.2 11l-3.7 4.4c2-.3 4.2-.4 6.5-.4s4.5.1 6.5.4L14 10l-2.8 3.4z"></svg:path>`,
})
export class MdiPanoramaVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPanoramaVerticalIcon],svg[mdi-panorama-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 12c0-3.9.8-6.9 1.4-8.7c.2-.6-.2-1.3-.9-1.3H5c-.7 0-1.2.7-.9 1.3c.6 2.1 1.4 4.8 1.4 8.7s-.8 6.7-1.4 8.7c-.3.6.2 1.3.9 1.3h14c.7 0 1.2-.7 1-1.3c-.7-2-1.5-4.8-1.5-8.7"></svg:path>`,
})
export class MdiPanoramaVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPanoramaVerticalOutlineIcon],svg[mdi-panorama-vertical-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.54 20c.77-2.6 1.16-5.28 1.16-8s-.39-5.4-1.16-8h10.91c-.77 2.6-1.16 5.28-1.16 8s.39 5.4 1.16 8m2.49 1.12c-1.1-2.94-1.64-6.03-1.64-9.12s.55-6.18 1.64-9.12c.06-.11.06-.22.06-.31c0-.34-.23-.57-.63-.57H4.63c-.4 0-.63.23-.63.57c0 .1 0 .2.06.31C5.16 5.82 5.71 8.91 5.71 12s-.55 6.18-1.64 9.12c-.07.11-.07.22-.07.31c0 .33.23.57.63.57h14.75c.39 0 .62-.24.62-.57c0-.1 0-.2-.06-.31"></svg:path>`,
})
export class MdiPanoramaVerticalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPanoramaWideAngleIcon],svg[mdi-panorama-wide-angle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c-4 0-6.8.6-9 1c-.5 2-1 3.9-1 7c0 3 .5 5 1 7c2.2.4 5 1 9 1s6.9-.6 9-1c.6-2 1-4 1-7s-.5-5.1-1-7c-2.1-.4-5-1-9-1"></svg:path>`,
})
export class MdiPanoramaWideAngleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPanoramaWideAngleOutlineIcon],svg[mdi-panorama-wide-angle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c-2.73 0-5.22.24-7.95.72l-.93.16l-.25.9C2.29 7.85 2 9.93 2 12s.29 4.15.87 6.22l.25.89l.93.16c2.73.49 5.22.73 7.95.73s5.22-.24 7.95-.72l.93-.16l.25-.89c.58-2.08.87-4.16.87-6.23s-.29-4.15-.87-6.22l-.25-.89l-.93-.16C17.22 4.24 14.73 4 12 4m0 2c2.45 0 4.71.2 7.29.64A21 21 0 0 1 20 12a21 21 0 0 1-.71 5.36c-2.58.44-4.84.64-7.29.64s-4.71-.2-7.29-.64A21 21 0 0 1 4 12a21 21 0 0 1 .71-5.36C7.29 6.2 9.55 6 12 6"></svg:path>`,
})
export class MdiPanoramaWideAngleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPaperCutVerticalIcon],svg[mdi-paper-cut-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.43 3.23L12 4l.57-.77v.01C13.12 2.5 14 2 15 2a3 3 0 0 1 3 3a3 3 0 0 1-.17 1H20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.17A3 3 0 0 1 6 5a3 3 0 0 1 3-3c1 0 1.88.5 2.43 1.24zM4 8v12h7a1 1 0 0 1 1-1a1 1 0 0 1 1 1h7V8h-5.1l2.1 2.92l-1.6 1.18L12.42 8h-.84L8.6 12.1L7 10.92L9.1 8zm5-4a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m6 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-3 12a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m0-3a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m0-3a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiPaperCutVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPaperRollIcon],svg[mdi-paper-roll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3C5.69 3 3.14 5.69 3 9v12h9v-7.54c1.1.99 2.5 1.54 4 1.54c3.31 0 6-2.69 6-6s-2.69-6-6-6zm7 2c2.21 0 4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4m0 2.25c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75s1.75-.78 1.75-1.75s-.78-1.75-1.75-1.75M4 12h1v1H4zm2 0h1v1H6zm2 0h1v1H8zm2 0h1v1h-1z"></svg:path>`,
})
export class MdiPaperRollIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPaperRollOutlineIcon],svg[mdi-paper-roll-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3C5.69 3 3.14 5.69 3 9v12h9v-7.54c1.1.99 2.5 1.54 4 1.54c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 2h2.54C10.55 6.1 10 7.5 10 9v3H9v1h1v6H5v-6h1v-1H5V9c0-2.21 1.79-4 4-4m7 0c2.21 0 4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4m0 2.25c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75s1.75-.78 1.75-1.75s-.78-1.75-1.75-1.75M7 12v1h1v-1z"></svg:path>`,
})
export class MdiPaperRollOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPaperclipIcon],svg[mdi-paperclip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 6v11.5a4 4 0 0 1-4 4a4 4 0 0 1-4-4V5A2.5 2.5 0 0 1 11 2.5A2.5 2.5 0 0 1 13.5 5v10.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1V6H10v9.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5V5a4 4 0 0 0-4-4a4 4 0 0 0-4 4v12.5a5.5 5.5 0 0 0 5.5 5.5a5.5 5.5 0 0 0 5.5-5.5V6z"></svg:path>`,
})
export class MdiPaperclipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPaperclipCheckIcon],svg[mdi-paperclip-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 21.36c.2.48.47.93.79 1.34A5.497 5.497 0 0 1 7 17.5V5c0-2.21 1.79-4 4-4s4 1.79 4 4v9.54c-.97.87-1.65 2.04-1.9 3.38c-.19.05-.39.08-.6.08a2.5 2.5 0 0 1-2.5-2.5V6h1.5v9.5c0 .55.45 1 1 1s1-.45 1-1V5a2.5 2.5 0 0 0-5 0v12.5c0 2.21 1.79 4 4 4c.34 0 .67-.06 1-.14M18 6h-1.5v7.55c.47-.21.97-.37 1.5-.46zm3.34 9.84l-3.59 3.59l-1.59-1.59L15 19l2.75 3l4.75-4.75z"></svg:path>`,
})
export class MdiPaperclipCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPaperclipLockIcon],svg[mdi-paperclip-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13c-1.4 0-2.8 1.1-2.8 2.5V17c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3v-1.5c0-1.4-1.4-2.5-2.8-2.5m0 1.2c.8 0 1.5.5 1.5 1.3V17h-3v-1.5c0-.8.7-1.3 1.5-1.3M8.9 2C6.8 2 5 3.8 5 6v10.5c0 3 2.5 5.5 5.5 5.5c.5 0 1-.1 1.5-.2v-1.6q-.75.3-1.5.3c-2.2 0-4-1.8-4-4V6c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v8.5c0 .6-.4 1-1 1s-1-.4-1-1V7H8v7.5c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5V6c0-2.2-1.8-4-4.1-4q.15 0 0 0m5.6 5v5.4c.4-.4.9-.8 1.5-1V7z"></svg:path>`,
})
export class MdiPaperclipLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPaperclipMinusIcon],svg[mdi-paperclip-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13.09c-.53.09-1.03.25-1.5.46V6H18zm-5.5 8.41c-2.21 0-4-1.79-4-4V5a2.5 2.5 0 0 1 5 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 0 0 2.5 2.5c.21 0 .41-.03.6-.08c.25-1.34.93-2.51 1.9-3.38V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5a5.497 5.497 0 0 0 7.29 5.2c-.32-.41-.59-.86-.79-1.34c-.33.08-.66.14-1 .14M15 18v2h8v-2z"></svg:path>`,
})
export class MdiPaperclipMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPaperclipOffIcon],svg[mdi-paperclip-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 5.3L7.16 3.96C7.62 2.26 9.15 1 11 1c2.21 0 4 1.79 4 4v6.8l-1.5-1.5V5a2.5 2.5 0 0 0-5 0zM18 6h-1.5v7.3l1.5 1.5zm4.11 15.46l-1.27 1.27l-3.22-3.23c-.81 2.05-2.79 3.5-5.12 3.5C9.46 23 7 20.54 7 17.5V8.89L1.11 3l1.28-1.27zM11.5 15.5c0 .55.45 1 1 1s1-.45 1-1v-.11l-2-2zm4.92 2.81l-1.69-1.69A2.48 2.48 0 0 1 12.5 18a2.5 2.5 0 0 1-2.5-2.5v-3.61l-1.5-1.5v7.11c0 2.21 1.79 4 4 4a4.01 4.01 0 0 0 3.92-3.19M10 6.8l1.5 1.5V6H10z"></svg:path>`,
})
export class MdiPaperclipOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPaperclipPlusIcon],svg[mdi-paperclip-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13.09c-.53.09-1.03.25-1.5.46V6H18zm-5.5 8.41c-2.21 0-4-1.79-4-4V5a2.5 2.5 0 0 1 5 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 0 0 2.5 2.5c.21 0 .41-.03.6-.08c.25-1.34.93-2.51 1.9-3.38V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5a5.497 5.497 0 0 0 7.29 5.2c-.32-.41-.59-.86-.79-1.34c-.33.08-.66.14-1 .14M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class MdiPaperclipPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPaperclipRemoveIcon],svg[mdi-paperclip-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13.09c-.53.09-1.03.25-1.5.46V6H18zM11 1C8.79 1 7 2.79 7 5v12.5a5.497 5.497 0 0 0 7.29 5.2c-.32-.41-.59-.86-.79-1.34c-.33.08-.66.14-1 .14c-2.21 0-4-1.79-4-4V5a2.5 2.5 0 0 1 5 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 0 0 2.5 2.5c.21 0 .41-.03.6-.08c.25-1.34.93-2.51 1.9-3.38V5c0-2.21-1.79-4-4-4m11.54 15.88l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19z"></svg:path>`,
})
export class MdiPaperclipRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiParachuteIcon],svg[mdi-parachute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.2 10.95L12 23L2.78 10.96l.09-.08c.21-.21.46-.38.71-.52l7.15 9.33L8.58 13l.66-1.19L12 20.38l2.73-8.58l.67 1.2l-2.13 6.69l7.14-9.34c.25.15.49.29.69.5zM5 9c1.5 0 2.81.86 3.5 2.1A3.97 3.97 0 0 1 12 9c1.5 0 2.8.85 3.5 2.09A3.93 3.93 0 0 1 19 9c1.09 0 2.09.42 2.81 1.14C20.94 5.5 16.88 2 12 2c-4.91 0-8.97 3.5-9.84 8.17C2.89 9.45 3.89 9 5 9"></svg:path>`,
})
export class MdiParachuteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiParachuteOutlineIcon],svg[mdi-parachute-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.2 10.95L12 23L2.78 10.96l.09-.08c.21-.21.46-.38.71-.52l7.15 9.33L8.58 13l.66-1.19L12 20.38l2.73-8.58l.67 1.2l-2.13 6.69l7.14-9.34c.25.15.49.29.69.5zM12 4c2.5 0 4.77 1.17 6.25 3.03a5.93 5.93 0 0 0-2.78 1.1C14.47 7.41 13.26 7 12 7c-1.29 0-2.5.41-3.5 1.14c-.82-.59-1.78-.97-2.79-1.1A8 8 0 0 1 12 4m0-2c-4.91 0-8.97 3.5-9.84 8.17C2.89 9.45 3.89 9 5 9c1.5 0 2.81.86 3.5 2.1A3.97 3.97 0 0 1 12 9c1.5 0 2.8.85 3.5 2.09A3.93 3.93 0 0 1 19 9c1.09 0 2.09.42 2.81 1.14C20.94 5.5 16.88 2 12 2"></svg:path>`,
})
export class MdiParachuteOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiParaglidingIcon],svg[mdi-paragliding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17c-1.1 0-2-.89-2-2s.9-2 2-2s2 .9 2 2s-.89 2-2 2m7-3h-2c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 2.79 1.64 5.19 4 6.32V23h6v-2.68c2.36-1.13 4-3.53 4-6.32m4-6.24c.04.8-.95 1.3-1.59.84c-.14-.14-.25-.16-.41-.28L18.97 13H17l-1.5-6.27c-2.29-.23-4.71-.23-7 0L7 13H5.03L3 8.32c-.16.12-.27.14-.41.28c-.64.46-1.631-.04-1.59-.84V4s0-3 11-3s11 3 11 3M6.9 7c-.9.2-1.75.43-2.53.71l1.5 3.56zm12.73.71C18.85 7.43 18 7.2 17.1 7l1.03 4.27z"></svg:path>`,
})
export class MdiParaglidingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiParkingIcon],svg[mdi-parking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.2 11H10V7h3.2a2 2 0 0 1 2 2a2 2 0 0 1-2 2M13 3H6v18h4v-6h3a6 6 0 0 0 6-6c0-3.32-2.69-6-6-6"></svg:path>`,
})
export class MdiParkingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPartyPopperIcon],svg[mdi-party-popper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.53 1.45l-1.08 1.08l1.6 1.6q.33.375.33.87c0 .495-.11.64-.33.86L11.5 9.47l1 1.08l3.63-3.61c.53-.59.79-1.24.79-1.94s-.26-1.36-.79-1.95zm-3.98 2.02L9.47 4.55l.61.56c.22.22.33.52.33.89s-.11.67-.33.89l-.61.56l1.08 1.08l.56-.61c.53-.59.8-1.23.8-1.92c0-.72-.27-1.37-.8-1.97zM21 5.06c-.69 0-1.33.27-1.92.8l-5.63 5.64l1.08 1l5.58-5.56c.25-.25.55-.38.89-.38s.64.13.89.38l.61.61l1.03-1.08l-.56-.61c-.59-.53-1.25-.8-1.97-.8M7 8L2 22l14-5zm12 3.06c-.7 0-1.34.27-1.94.8l-1.59 1.59l1.08 1.08l1.59-1.59c.25-.25.53-.38.86-.38s.63.13.88.38l1.62 1.59l1.05-1.03l-1.6-1.64c-.59-.53-1.25-.8-1.95-.8"></svg:path>`,
})
export class MdiPartyPopperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPassportIcon],svg[mdi-passport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm6 3a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 1c-.41.62-.75 1.29-.96 2h1.92A7.2 7.2 0 0 0 12 6m-1.3.22C9.78 6.53 9 7.17 8.54 8H10c.18-.62.4-1.22.7-1.78m2.59 0c.3.56.53 1.16.71 1.78h1.46c-.46-.83-1.25-1.46-2.17-1.78M8.13 9c-.08.32-.13.65-.13 1s.05.68.13 1h1.69c-.04-.33-.07-.66-.07-1s.03-.67.07-1zm2.7 0c-.05.32-.08.66-.08 1s.03.67.08 1h2.34c.04-.33.08-.66.08-1s-.04-.68-.08-1zm3.35 0c.04.33.07.66.07 1s-.03.67-.07 1h1.69c.08-.32.13-.65.13-1s-.05-.68-.13-1zm-5.64 3c.46.83 1.24 1.46 2.16 1.78c-.3-.56-.52-1.15-.7-1.78zm2.5 0c.21.72.55 1.38.96 2c.42-.62.75-1.28.96-2zM14 12c-.18.63-.41 1.22-.71 1.78c.92-.32 1.71-.95 2.17-1.78zm-7 5h10v2H7z"></svg:path>`,
})
export class MdiPassportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPassportAlertIcon],svg[mdi-passport-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6c-.41.62-.75 1.29-.96 2h1.92A7.2 7.2 0 0 0 10 6m-1.3.22C7.78 6.53 7 7.17 6.54 8H8c.18-.62.4-1.22.7-1.78m2.59 0c.3.56.53 1.16.71 1.78h1.46c-.46-.83-1.25-1.46-2.17-1.78M6.13 9c-.08.32-.13.65-.13 1s.05.68.13 1h1.69c-.04-.33-.07-.66-.07-1s.03-.67.07-1zm2.7 0c-.05.32-.08.66-.08 1s.03.67.08 1h2.34c.04-.33.08-.66.08-1s-.04-.68-.08-1zm3.35 0c.04.33.07.66.07 1s-.03.67-.07 1h1.69c.08-.32.13-.65.13-1s-.05-.68-.13-1zm-5.64 3c.46.83 1.24 1.46 2.16 1.78c-.3-.56-.52-1.15-.7-1.78zm2.5 0c.21.72.55 1.38.96 2c.42-.62.75-1.28.96-2zM12 12c-.18.63-.41 1.22-.71 1.78c.92-.32 1.71-.95 2.17-1.78zM4 2c-.53 0-1.04.21-1.41.59C2.21 2.96 2 3.47 2 4v16c0 .53.21 1.04.59 1.41c.37.38.88.59 1.41.59h12c.53 0 1.04-.21 1.41-.59c.38-.37.59-.88.59-1.41V4c0-.53-.21-1.04-.59-1.41C17.04 2.21 16.53 2 16 2zm6 3c1.33 0 2.6.53 3.54 1.46C14.47 7.4 15 8.67 15 10s-.53 2.6-1.46 3.54C12.6 14.47 11.33 15 10 15s-2.6-.53-3.54-1.46A5.04 5.04 0 0 1 5 10c0-1.33.53-2.6 1.46-3.54C7.4 5.53 8.67 5 10 5m5 12v2H5v-2zm5-10h2v6h-2zm2 8h-2v2h2z"></svg:path>`,
})
export class MdiPassportAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPassportBiometricIcon],svg[mdi-passport-biometric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4a2 2 0 0 0-2 2v5h6.13c.46-1.76 2.05-3 3.87-3a4.01 4.01 0 0 1 3.87 3H22V6a2 2 0 0 0-2-2zm8 6a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M2 13v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5h-6.13A4.01 4.01 0 0 1 12 16a4.01 4.01 0 0 1-3.87-3z"></svg:path>`,
})
export class MdiPassportBiometricIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPassportCancelIcon],svg[mdi-passport-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2c-.53 0-1.04.21-1.41.59C4.21 2.96 4 3.47 4 4v16c0 .53.21 1.04.59 1.41c.37.38.88.59 1.41.59h7c-.54-.88-.9-1.9-1-3H7v-2h5.17c.19-.77.5-1.5.93-2.12a5.04 5.04 0 0 1-4.64-1.34A5.04 5.04 0 0 1 7 10c0-1.33.53-2.6 1.46-3.54C9.4 5.53 10.67 5 12 5s2.6.53 3.54 1.46C16.47 7.4 17 8.67 17 10c0 .82-.2 1.63-.58 2.34c.65-.22 1.35-.34 2.08-.34c.5 0 1 .06 1.5.17V4c0-.53-.21-1.04-.59-1.41C19.04 2.21 18.53 2 18 2zm6 4c-.41.62-.75 1.29-.96 2h1.92A7.2 7.2 0 0 0 12 6m-1.3.22C9.78 6.53 9 7.17 8.54 8H10c.18-.62.4-1.22.7-1.78m2.59 0c.3.56.53 1.16.71 1.78h1.46c-.46-.83-1.25-1.46-2.17-1.78M8.13 9c-.08.32-.13.65-.13 1s.05.68.13 1h1.69c-.04-.33-.07-.66-.07-1s.03-.67.07-1zm2.7 0c-.05.32-.08.66-.08 1s.03.67.08 1h2.34c.04-.33.08-.66.08-1s-.04-.68-.08-1zm3.35 0c.04.33.07.66.07 1s-.03.67-.07 1h1.69c.08-.32.13-.65.13-1s-.05-.68-.13-1zm-5.64 3c.46.83 1.24 1.46 2.16 1.78c-.3-.56-.52-1.15-.7-1.78zm2.5 0c.21.72.55 1.38.96 2c.42-.62.75-1.28.96-2zM14 12c-.18.63-.41 1.22-.71 1.78c.92-.32 1.71-.95 2.17-1.78zm4.5 11c2.5 0 4.5-2 4.5-4.5S21 14 18.5 14S14 16 14 18.5s2 4.5 4.5 4.5m-2.58-6L20 21.09c-.42.26-.94.41-1.5.41c-1.66 0-3-1.34-3-3c0-.56.15-1.08.42-1.5m5.58 1.5c0 .56-.15 1.08-.41 1.5L17 15.92c.42-.27.94-.42 1.5-.42c1.66 0 3 1.34 3 3"></svg:path>`,
})
export class MdiPassportCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPassportCheckIcon],svg[mdi-passport-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6c-.41.62-.75 1.29-.96 2h1.92A7.2 7.2 0 0 0 12 6m-1.3.22C9.78 6.53 9 7.17 8.54 8H10c.18-.62.4-1.22.7-1.78m2.59 0c.3.56.53 1.16.71 1.78h1.46c-.46-.83-1.25-1.46-2.17-1.78M8.13 9c-.08.32-.13.65-.13 1s.05.68.13 1h1.69c-.04-.33-.07-.66-.07-1s.03-.67.07-1zm2.7 0c-.05.32-.08.66-.08 1s.03.67.08 1h2.34c.04-.33.08-.66.08-1s-.04-.68-.08-1zm3.35 0c.04.33.07.66.07 1s-.03.67-.07 1h1.69c.08-.32.13-.65.13-1s-.05-.68-.13-1zm-5.64 3c.46.83 1.24 1.46 2.16 1.78c-.3-.56-.52-1.15-.7-1.78zm2.5 0c.21.72.55 1.38.96 2c.42-.62.75-1.28.96-2zM14 12c-.18.63-.41 1.22-.71 1.78c.92-.32 1.71-.95 2.17-1.78zM6 2c-.53 0-1.04.21-1.41.59C4.21 2.96 4 3.47 4 4v16c0 .53.21 1.04.59 1.41c.37.38.88.59 1.41.59h8.8c-.51-.88-.8-1.91-.8-3H7v-2h7.34c.83-2.33 3.05-4 5.66-4V4c0-.53-.21-1.04-.59-1.41C19.04 2.21 18.53 2 18 2zm6 3c1.33 0 2.6.53 3.54 1.46C16.47 7.4 17 8.67 17 10s-.53 2.6-1.46 3.54C14.6 14.47 13.33 15 12 15s-2.6-.53-3.54-1.46A5.04 5.04 0 0 1 7 10c0-1.33.53-2.6 1.46-3.54C9.4 5.53 10.67 5 12 5m6.75 17.16l-2.75-3L17.16 18l1.59 1.59L22.34 16l1.16 1.41z"></svg:path>`,
})
export class MdiPassportCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPassportMinusIcon],svg[mdi-passport-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6c-.41.62-.75 1.29-.96 2h1.92A7.2 7.2 0 0 0 12 6m-1.3.22C9.78 6.53 9 7.17 8.54 8H10c.18-.62.4-1.22.7-1.78m2.59 0c.3.56.53 1.16.71 1.78h1.46c-.46-.83-1.25-1.46-2.17-1.78M8.13 9c-.08.32-.13.65-.13 1s.05.68.13 1h1.69c-.04-.33-.07-.66-.07-1s.03-.67.07-1zm2.7 0c-.05.32-.08.66-.08 1s.03.67.08 1h2.34c.04-.33.08-.66.08-1s-.04-.68-.08-1zm3.35 0c.04.33.07.66.07 1s-.03.67-.07 1h1.69c.08-.32.13-.65.13-1s-.05-.68-.13-1zm-5.64 3c.46.83 1.24 1.46 2.16 1.78c-.3-.56-.52-1.15-.7-1.78zm2.5 0c.21.72.55 1.38.96 2c.42-.62.75-1.28.96-2zM14 12c-.18.63-.41 1.22-.71 1.78c.92-.32 1.71-.95 2.17-1.78zM6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7.803A6 6 0 0 1 13 19H7v-2h6.341A6 6 0 0 1 20 13.083V4a2 2 0 0 0-2-2zm6 3a5 5 0 1 1 0 10a5 5 0 0 1 0-10m11 15v-2h-8v2z"></svg:path>`,
})
export class MdiPassportMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPassportPlusIcon],svg[mdi-passport-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6c-.41.62-.75 1.29-.96 2h1.92A7.2 7.2 0 0 0 12 6m-1.3.22C9.78 6.53 9 7.17 8.54 8H10c.18-.62.4-1.22.7-1.78m2.59 0c.3.56.53 1.16.71 1.78h1.46c-.46-.83-1.25-1.46-2.17-1.78M8.13 9c-.08.32-.13.65-.13 1s.05.68.13 1h1.69c-.04-.33-.07-.66-.07-1s.03-.67.07-1zm2.7 0c-.05.32-.08.66-.08 1s.03.67.08 1h2.34c.04-.33.08-.66.08-1s-.04-.68-.08-1zm3.35 0c.04.33.07.66.07 1s-.03.67-.07 1h1.69c.08-.32.13-.65.13-1s-.05-.68-.13-1zm-5.64 3c.46.83 1.24 1.46 2.16 1.78c-.3-.56-.52-1.15-.7-1.78zm2.5 0c.21.72.55 1.38.96 2c.42-.62.75-1.28.96-2zM14 12c-.18.63-.41 1.22-.71 1.78c.92-.32 1.71-.95 2.17-1.78zM6 2c-.53 0-1.04.21-1.41.59C4.21 2.96 4 3.47 4 4v16c0 .53.21 1.04.59 1.41c.37.38.88.59 1.41.59h7.8c-.51-.88-.8-1.91-.8-3H7v-2h6.34c.83-2.33 3.05-4 5.66-4c.34 0 .68.03 1 .08V4c0-.53-.21-1.04-.59-1.41C19.04 2.21 18.53 2 18 2zm6 3c1.33 0 2.6.53 3.54 1.46C16.47 7.4 17 8.67 17 10s-.53 2.6-1.46 3.54C14.6 14.47 13.33 15 12 15s-2.6-.53-3.54-1.46A5.04 5.04 0 0 1 7 10c0-1.33.53-2.6 1.46-3.54C9.4 5.53 10.67 5 12 5m6 13v-3h2v3h3v2h-3v3h-2v-3h-3v-2z"></svg:path>`,
})
export class MdiPassportPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPassportRemoveIcon],svg[mdi-passport-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6c-.41.62-.75 1.29-.96 2h1.92A7.2 7.2 0 0 0 12 6m-1.3.22C9.78 6.53 9 7.17 8.54 8H10c.18-.62.4-1.22.7-1.78m2.59 0c.3.56.53 1.16.71 1.78h1.46c-.46-.83-1.25-1.46-2.17-1.78M8.13 9c-.08.32-.13.65-.13 1s.05.68.13 1h1.69c-.04-.33-.07-.66-.07-1s.03-.67.07-1zm2.7 0c-.05.32-.08.66-.08 1s.03.67.08 1h2.34c.04-.33.08-.66.08-1s-.04-.68-.08-1zm3.35 0c.04.33.07.66.07 1s-.03.67-.07 1h1.69c.08-.32.13-.65.13-1s-.05-.68-.13-1zm-5.64 3c.46.83 1.24 1.46 2.16 1.78c-.3-.56-.52-1.15-.7-1.78zm2.5 0c.21.72.55 1.38.96 2c.42-.62.75-1.28.96-2zM14 12c-.18.63-.41 1.22-.71 1.78c.92-.32 1.71-.95 2.17-1.78zM6 2c-.53 0-1.04.21-1.41.59C4.21 2.96 4 3.47 4 4v16c0 .53.21 1.04.59 1.41c.37.38.88.59 1.41.59h7.8c-.51-.88-.8-1.91-.8-3H7v-2h6.34c.83-2.33 3.05-4 5.66-4c.34 0 .68.03 1 .08V4c0-.53-.21-1.04-.59-1.41C19.04 2.21 18.53 2 18 2zm6 3c1.33 0 2.6.53 3.54 1.46C16.47 7.4 17 8.67 17 10s-.53 2.6-1.46 3.54C14.6 14.47 13.33 15 12 15s-2.6-.53-3.54-1.46A5.04 5.04 0 0 1 7 10c0-1.33.53-2.6 1.46-3.54C9.4 5.53 10.67 5 12 5m3.46 11.88l1.42-1.42L19 17.59l2.12-2.12l1.42 1.41L20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.42-1.42L17.59 19l-2.12-2.12Z"></svg:path>`,
})
export class MdiPassportRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPastaIcon],svg[mdi-pasta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16.5V8H3V7h1V6H3V5h1V4H3V3h6c.5.03.95.24 1.34.63s.61.87.66 1.37h10v1H11c-.05.53-.27 1-.66 1.43S9.5 8.05 9 8H7v7.05c.05 0 .13-.01.24-.05s.2 0 .26 0q.84 0 1.92.42c.41-.92 1.11-1.74 2.11-2.42s2-1 3-1c1.53 0 2.83.53 3.89 1.59S20 15.95 20 17.5v.27c0 .13-.03.2-.03.23H3.14c.13-.5.41-1 .86-1.5m2-1.27V8H5v7.7c.5-.25.81-.4 1-.47M9 7V6H7v1zm0-3H7v1h2zM5 4v1h1V4zm0 2v1h1V6zM2 19h20l-2 2H4z"></svg:path>`,
})
export class MdiPastaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPatioHeaterIcon],svg[mdi-patio-heater-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 22H9v-1h6zm4-18l-4-2H9L5 4zM8 5l.4 1h7.2l.4-1zm2 5h1v5c-.6 0-1 .4-1 1v4h4v-4c0-.6-.4-1-1-1v-5h1l.4-1H9.6zm-.8-2h5.6l.4-1H8.8z"></svg:path>`,
})
export class MdiPatioHeaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPatreonIcon],svg[mdi-patreon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.82 2.41c3.96 0 7.18 3.24 7.18 7.21c0 3.96-3.22 7.18-7.18 7.18c-3.97 0-7.21-3.22-7.21-7.18c0-3.97 3.24-7.21 7.21-7.21M2 21.6h3.5V2.41H2z"></svg:path>`,
})
export class MdiPatreonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPauseIcon],svg[mdi-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 19h4V5h-4M6 19h4V5H6z"></svg:path>`,
})
export class MdiPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPauseBoxIcon],svg[mdi-pause-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m-8 13H9V8h2zm4 0h-2V8h2z"></svg:path>`,
})
export class MdiPauseBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPauseBoxOutlineIcon],svg[mdi-pause-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zm-6-3V8h2v8zm-4 0V8h2v8z"></svg:path>`,
})
export class MdiPauseBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPauseCircleIcon],svg[mdi-pause-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 16h-2V8h2m-4 8H9V8h2m1-6A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></svg:path>`,
})
export class MdiPauseCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPauseCircleOutlineIcon],svg[mdi-pause-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 16V8h2v8zm-4 0V8h2v8zm3-14a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8"></svg:path>`,
})
export class MdiPauseCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPauseOctagonIcon],svg[mdi-pause-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.73 3L21 8.27v7.46L15.73 21H8.27L3 15.73V8.27L8.27 3zM15 16V8h-2v8zm-4 0V8H9v8z"></svg:path>`,
})
export class MdiPauseOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPauseOctagonOutlineIcon],svg[mdi-pause-octagon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 16h-2V8h2zm-4 0H9V8h2zm4.73-13L21 8.27v7.46L15.73 21H8.27L3 15.73V8.27L8.27 3zm-.83 2H9.1L5 9.1v5.8L9.1 19h5.8l4.1-4.1V9.1z"></svg:path>`,
})
export class MdiPauseOctagonOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPawIcon],svg[mdi-paw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.35 3c1.18-.17 2.43 1.12 2.79 2.9c.36 1.77-.29 3.35-1.47 3.53c-1.17.18-2.43-1.11-2.8-2.89c-.37-1.77.3-3.35 1.48-3.54m7.15 0c1.19.19 1.85 1.77 1.5 3.54c-.38 1.78-1.63 3.07-2.81 2.89c-1.19-.18-1.84-1.76-1.47-3.53c.36-1.78 1.61-3.07 2.78-2.9M3 7.6c1.14-.49 2.69.4 3.5 1.95c.76 1.58.5 3.24-.63 3.73s-2.67-.39-3.46-1.96S1.9 8.08 3 7.6m18 0c1.1.48 1.38 2.15.59 3.72s-2.33 2.45-3.46 1.96s-1.39-2.15-.63-3.73C18.31 8 19.86 7.11 21 7.6m-1.67 10.78c.04.94-.68 1.98-1.54 2.37c-1.79.82-3.91-.88-5.9-.88s-4.13 1.77-5.89.88c-1-.49-1.69-1.79-1.56-2.87c.18-1.49 1.97-2.29 3.03-3.38c1.41-1.41 2.41-4.06 4.42-4.06c2 0 3.06 2.61 4.41 4.06c1.11 1.22 2.96 2.25 3.03 3.88"></svg:path>`,
})
export class MdiPawIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPawOffIcon],svg[mdi-paw-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.27L3.28 3L21.5 21.22l-1.27 1.28l-2-2c-.14.1-.29.18-.44.25c-1.79.82-3.91-.88-5.9-.88s-4.13 1.77-5.89.88c-1-.49-1.69-1.79-1.56-2.87c.18-1.49 1.97-2.29 3.03-3.38c.74-.73 1.37-1.81 2.08-2.68zM8.35 3c1.18-.17 2.43 1.12 2.79 2.9c.18.85.12 1.66-.14 2.29L7.03 4.2c.26-.65.72-1.1 1.32-1.2m7.15 0c1.19.19 1.85 1.77 1.5 3.54c-.38 1.78-1.63 3.07-2.81 2.89c-1.19-.18-1.84-1.76-1.47-3.53c.36-1.78 1.61-3.07 2.78-2.9M3 7.6c1.14-.49 2.69.4 3.5 1.95c.76 1.58.5 3.24-.63 3.73s-2.67-.39-3.46-1.96S1.9 8.08 3 7.6m18 0c1.1.48 1.38 2.15.59 3.72s-2.33 2.45-3.46 1.96s-1.39-2.15-.63-3.73C18.31 8 19.86 7.11 21 7.6"></svg:path>`,
})
export class MdiPawOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPawOffOutlineIcon],svg[mdi-paw-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.83 8.25c-.27-.75-.78-1.29-1.44-1.57c-1.17-.5-2.59-.08-3.69.98q.165-.435.3-.93c.25-1.35 0-2.7-.62-3.61c-.43-.62-1.05-1.01-1.74-1.12c-1.54-.22-3.07 1.08-3.71 3c-.65-1.95-2.19-3.24-3.74-3c-.69.12-1.31.53-1.74 1.16l-.03.06l1.49 1.49c.05-.17.09-.31.19-.42c.12-.17.26-.29.4-.29c.5-.09 1.38.69 1.66 2.1c.07.34.08.65.06.9l1.66 1.68c.01-.03.03-.06.05-.1c.04.11.11.2.16.31l1.34 1.34a2.3 2.3 0 0 0 .98.22c.72 0 1.42-.33 2.02-.88c-.43 1.07-.47 2.16-.14 3.06c.27.72.78 1.28 1.44 1.57c.34.14.7.21 1.07.21c1.38 0 2.86-1.01 3.7-2.64c.58-1.19.71-2.47.33-3.52M16 6.33c-.28 1.4-1.17 2.17-1.66 2.11c-.06-.01-.22-.03-.4-.29c-.25-.36-.44-1.08-.24-2.05c.27-1.34 1.1-2.1 1.59-2.1h.07c.14 0 .27.11.39.27c.32.46.43 1.27.25 2.06m4.7 4.54c-.58 1.13-1.62 1.73-2.17 1.49c-.06-.02-.25-.1-.37-.43c-.16-.5-.09-1.25.23-1.93c.51-.96 1.35-1.53 1.94-1.53c.1 0 .17.03.27.03c.15.08.27.22.35.44c.14.4.15 1.12-.25 1.93M1.11 3L4.8 6.69c-.74-.28-1.51-.3-2.2-.01c-.66.29-1.17.85-1.43 1.59c-.377 1.04-.251 2.31.33 3.5c.84 1.63 2.32 2.64 3.71 2.64c.36 0 .72-.07 1.06-.21c.66-.29 1.17-.85 1.44-1.57c.29-.84.29-1.86-.07-2.87c.19.15.4.27.6.37l1.49 1.49c-.79.88-1.46 2.08-2.26 2.88c-1.06 1.09-2.85 1.89-3.03 3.38c-.13 1.08.56 2.38 1.56 2.87c.35.18.72.25 1.1.25c1.51 0 3.2-1.13 4.79-1.13c1.61 0 3.29 1.1 4.82 1.1c.37 0 .73-.06 1.08-.22c.21-.1.44-.25.64-.43l2.41 2.41l1.27-1.27L2.39 1.73zm10.04 10.04L17 18.9c0 .01-.03.02-.04.03a.6.6 0 0 1-.25.04c-.43 0-1.08-.22-1.71-.43c-.92-.31-1.97-.67-3.11-.67s-2.19.37-3.11.69c-.63.21-1.28.44-1.68.44c-.13 0-.18 0-.22-.05c-.22-.11-.48-.58-.45-.83c.07-.23.8-.81 1.16-1.12c.44-.32.91-.67 1.3-1.09c.55-.55 1-1.18 1.44-1.79c.22-.32.53-.74.82-1.08M5.6 10c.33.68.4 1.43.24 1.93c-.13.33-.31.41-.37.43c-.55.24-1.59-.36-2.17-1.49c-.4-.81-.39-1.52-.25-1.93c.08-.21.2-.36.35-.44c.1 0 .17-.04.28-.04c.58 0 1.42.57 1.92 1.54"></svg:path>`,
})
export class MdiPawOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPawOutlineIcon],svg[mdi-paw-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.83 8.25c-.27-.75-.78-1.29-1.43-1.57c-1.17-.5-2.59-.08-3.7.98q.165-.435.3-.93c.25-1.35.03-2.7-.62-3.61c-.43-.62-1.05-1.01-1.74-1.12c-1.54-.22-3.07 1.08-3.71 3c-.64-1.95-2.19-3.24-3.74-3c-.69.12-1.31.53-1.74 1.16c-.64.93-.84 2.23-.56 3.58c.05.26.11.5.2.73C5 6.56 3.7 6.2 2.6 6.68c-.66.29-1.16.85-1.43 1.59c-.376 1.04-.25 2.31.33 3.5c.84 1.63 2.32 2.64 3.71 2.64c.36 0 .72-.07 1.06-.21c.66-.29 1.17-.85 1.44-1.57c.32-.84.29-1.86-.07-2.87c.55.43 1.17.69 1.81.69c.12 0 .25-.01.37-.03c.68-.1 1.3-.5 1.73-1.12c.15-.22.28-.46.38-.72c.1.26.22.5.37.71c.43.62 1.05 1.02 1.74 1.13c.12.02.25.03.37.03c.72 0 1.42-.33 2.02-.88c-.43 1.07-.47 2.16-.14 3.06c.27.73.78 1.28 1.44 1.57c.34.14.7.21 1.07.21c1.38 0 2.86-1.01 3.7-2.64c.58-1.19.71-2.47.33-3.52M5.84 11.93c-.12.33-.31.41-.37.43c-.55.24-1.59-.36-2.17-1.49c-.4-.81-.39-1.52-.25-1.93c.08-.21.2-.36.35-.44c.1 0 .18-.04.28-.04c.58 0 1.42.57 1.92 1.54c.33.68.43 1.43.24 1.93m4.07-3.77c-.12.16-.25.26-.41.28c-.5.06-1.36-.71-1.65-2.1c-.2-.96 0-1.68.25-2.05c.12-.17.26-.29.4-.29c.5-.09 1.38.69 1.66 2.1c.2.97 0 1.7-.25 2.06M16 6.33c-.28 1.4-1.17 2.17-1.66 2.11c-.06-.01-.22-.03-.4-.29c-.25-.36-.44-1.08-.24-2.05c.27-1.34 1.1-2.1 1.59-2.1h.07c.14 0 .27.11.39.27c.32.46.43 1.27.25 2.06m4.7 4.54c-.58 1.13-1.62 1.73-2.17 1.49c-.06-.02-.25-.1-.37-.43c-.16-.5-.09-1.25.23-1.93c.51-.96 1.36-1.53 1.94-1.53c.1 0 .17.03.27.03h.01c.15.08.26.22.34.44c.15.4.16 1.12-.25 1.93m-4.4 3.63c-1.35-1.45-2.41-4.06-4.41-4.06c-2.01 0-3.01 2.65-4.42 4.06c-1.06 1.09-2.85 1.89-3.03 3.38c-.13 1.08.56 2.38 1.56 2.87c.35.18.72.25 1.1.25c1.51 0 3.2-1.13 4.79-1.13c1.61 0 3.29 1.1 4.82 1.1c.37 0 .73-.06 1.08-.22c.86-.39 1.58-1.43 1.54-2.37c-.07-1.63-1.92-2.66-3.03-3.88m.66 4.43a.6.6 0 0 1-.25.04c-.42 0-1.08-.22-1.71-.43c-.92-.31-1.97-.67-3.11-.67s-2.19.37-3.11.69c-.63.21-1.28.44-1.68.44c-.13 0-.18 0-.22-.05c-.22-.11-.48-.58-.45-.83c.07-.23.8-.81 1.16-1.12c.44-.32.91-.67 1.3-1.09c.55-.55 1-1.18 1.44-1.79c.45-.62 1.2-1.68 1.56-1.68c.4 0 1.19 1.12 1.67 1.78c.39.56.8 1.13 1.26 1.63c.39.42.8.79 1.18 1.15c.54.45 1.32 1.14 1.33 1.44c-.01.14-.21.42-.37.49"></svg:path>`,
})
export class MdiPawOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPaypalIcon],svg[mdi-paypal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8.32 21.97a.546.546 0 0 1-.26-.32c-.03-.15-.06.11.6-4.09c.6-3.8.59-3.74.67-3.85c.13-.17.11-.17 1.61-.18c1.32-.03 1.6-.03 2.19-.12c3.25-.45 5.26-2.36 5.96-5.66c.04-.22.08-.41.09-.41c0-.01.07.04.15.1c1.03.78 1.38 2.22.99 4.14c-.46 2.29-1.68 3.81-3.58 4.46c-.81.28-1.49.39-2.69.42c-.8.04-.82.04-1.05.19c-.17.17-.16.14-.55 2.55c-.27 1.7-.37 2.25-.41 2.35c-.07.16-.21.3-.37.38l-.11.07H10c-1.29 0-1.62 0-1.68-.03m-4.5-2.23c-.19-.1-.32-.27-.32-.47C3.5 19 6.11 2.68 6.18 2.5c.09-.18.32-.37.5-.44L6.83 2h3.53c3.91 0 3.76 0 4.64.2c2.62.55 3.82 2.3 3.37 4.93c-.5 2.93-1.98 4.67-4.5 5.3c-.87.21-1.48.27-3.14.27c-1.31 0-1.41.01-1.67.15c-.26.15-.47.42-.56.75c-.04.07-.27 1.47-.53 3.1a241.3 241.3 0 0 0-.47 3.02l-.03.06H5.69c-1.58 0-1.8 0-1.87-.04z" fill="currentColor"></svg:path>`,
})
export class MdiPaypalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPeaceIcon],svg[mdi-peace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 12.41v5.52a8 8 0 0 1-3.9-1.62zm2 0l3.9 3.9a8 8 0 0 1-3.9 1.62zM4 12c0-4.03 3-7.43 7-7.93v7.52L5.69 16.9A7.9 7.9 0 0 1 4 12m14.31 4.9L13 11.59V4.07c4 .5 7 3.9 7 7.93c0 1.78-.59 3.5-1.69 4.9"></svg:path>`,
})
export class MdiPeaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPeanutIcon],svg[mdi-peanut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12.77a2 2 0 0 1-.14-2.65a5 5 0 0 0-2.82-8A5.7 5.7 0 0 0 12 2a5 5 0 0 0-5 5a5 5 0 0 0 1.11 3.12a2 2 0 0 1-.11 2.6a5.5 5.5 0 0 0 2.81 9.15A5.4 5.4 0 0 0 12 22a5.5 5.5 0 0 0 4-9.23M13 5a1 1 0 1 1-1 1a1 1 0 0 1 1-1m-2 13a1 1 0 1 1 1-1a1 1 0 0 1-1 1m1-3a1 1 0 1 1 1 1a1 1 0 0 1-1-1m2 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiPeanutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPeanutOffIcon],svg[mdi-peanut-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.9 10.12a5 5 0 0 0-2.82-8A5.7 5.7 0 0 0 12 2a5 5 0 0 0-4.32 2.5l8.7 8.68a4 4 0 0 0-.34-.41a2 2 0 0 1-.14-2.65M13 7a1 1 0 1 1 1-1a1 1 0 0 1-1 1m-6-.61L2.39 1.73L1.11 3L7.8 9.69c.1.15.2.31.31.43a2 2 0 0 1-.11 2.6a5.5 5.5 0 0 0 2.81 9.15A5.4 5.4 0 0 0 12 22a5.5 5.5 0 0 0 5-3.14l3.87 3.87l1.27-1.27M11 18a1 1 0 1 1 1-1a1 1 0 0 1-1 1m3 1a1 1 0 1 1 1-1a1 1 0 0 1-1 1m-1-3a1 1 0 0 1-1-1a1 1 0 0 1 .35-.76l1.41 1.41A1 1 0 0 1 13 16"></svg:path>`,
})
export class MdiPeanutOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPeanutOffOutlineIcon],svg[mdi-peanut-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.11 21.46l-1.27 1.27l-3.15-3.15c-.33.63-.76 1.19-1.28 1.67a6.43 6.43 0 0 1-5.8 1.6c-3.51-.75-5.74-4.21-4.99-7.72c.25-1.18.83-2.26 1.66-3.13a.93.93 0 0 0 0-1.28a6 6 0 0 1-1.24-2.79L1.11 3l1.28-1.27zm-6.81-1.9c.39-.43.7-.93.89-1.48l-2.44-2.44c-.18.23-.46.36-.75.36c-.55 0-1-.45-1-1c0-.29.13-.57.36-.75l-2.81-2.81c-.02.74-.31 1.44-.82 1.97c-1.7 1.81-1.6 4.66.21 6.36l.01.01a4.5 4.5 0 0 0 6.35-.22M14 17c-1.29 0-1.28 2 0 2s1.29-2 0-2M6.9 3.7l1.53 1.53c.25-.52.62-.98 1.07-1.34c.7-.58 1.59-.89 2.5-.89h.88c.59.14 1.12.41 1.62.79c1.72 1.38 2 3.9.62 5.62a3 3 0 0 0-.67 1.84l3.87 3.87c-.25-1.15-.82-2.2-1.6-3.06c-.35-.36-.39-.93-.1-1.34C16.62 10.72 18 9 18 7S15.97.997 12 .997S6.9 3.7 6.9 3.7M12 17c0-1.29-2-1.28-2 0s2 1.29 2 0m1-12c-1.29 0-1.28 2 0 2s1.29-2 0-2"></svg:path>`,
})
export class MdiPeanutOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPeanutOutlineIcon],svg[mdi-peanut-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23c-.47 0-.93-.05-1.39-.15c-3.51-.75-5.74-4.21-4.99-7.72c.25-1.18.83-2.26 1.66-3.13a.93.93 0 0 0 0-1.28c-2.08-2.58-1.68-6.36.9-8.44s6.36-1.673 8.44.91c1.77 2.19 1.77 5.31 0 7.53c-.29.41-.25.98.1 1.34c2.45 2.62 2.32 6.74-.31 9.19A6.44 6.44 0 0 1 12 23m0-20c-.91 0-1.8.31-2.5.89a3.98 3.98 0 0 0-.62 5.61c.96 1.14.89 2.83-.15 3.91c-1.7 1.81-1.6 4.66.21 6.36s4.66 1.61 6.36-.21a4.5 4.5 0 0 0 0-6.15a3 3 0 0 1-.18-4a4 4 0 0 0-.62-5.62c-.5-.38-1.03-.65-1.62-.79zm0 3c0 .55.45 1 1 1s1-.45 1-1s-.45-1-1-1s-1 .45-1 1m2 13c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m-1-3c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m-2 2c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1"></svg:path>`,
})
export class MdiPeanutOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPenIcon],svg[mdi-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.71 7.04c-.34.34-.67.67-.68 1c-.03.32.31.65.63.96c.48.5.95.95.93 1.44s-.53 1-1.04 1.5l-4.13 4.14L15 14.66l4.25-4.24l-.96-.96l-1.42 1.41l-3.75-3.75l3.84-3.83c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41M3 17.25l9.56-9.57l3.75 3.75L6.75 21H3z"></svg:path>`,
})
export class MdiPenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPenLockIcon],svg[mdi-pen-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.7 7c-.3.4-.7.7-.7 1s.3.6.6 1c.5.5 1 .9.9 1.4c0 .5-.5 1-1 1.5L17.4 16L16 14.7l4.2-4.2l-1-1l-1.4 1.4L14 7.1l4-3.8c.4-.4 1-.4 1.4 0l2.3 2.3c.4.4.4 1.1 0 1.4M4 17.2l9.6-9.6l3.7 3.8L7.8 21H4zM8 5v-.5C8 3.1 6.9 2 5.5 2S3 3.1 3 4.5V5c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h5c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1M7 5H4v-.5C4 3.7 4.7 3 5.5 3S7 3.7 7 4.5z"></svg:path>`,
})
export class MdiPenLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPenMinusIcon],svg[mdi-pen-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.7 7c-.3.4-.7.7-.7 1s.3.6.6 1c.5.5 1 .9.9 1.4c0 .5-.5 1-1 1.5L16.4 16L15 14.7l4.2-4.2l-1-1l-1.4 1.4L13 7.1l4-3.8c.4-.4 1-.4 1.4 0l2.3 2.3c.4.4.4 1.1 0 1.4M3 17.2l9.6-9.6l3.7 3.8L6.8 21H3zM10 5v2H2V5z"></svg:path>`,
})
export class MdiPenMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPenOffIcon],svg[mdi-pen-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.3 5L1 6.3l6.5 6.5L3 17.2V21h3.8l4.5-4.5l6.5 6.5l1.3-1.3zm14.6 5.9l-3.8-3.8L17 3.3c.4-.4 1-.4 1.4 0l2.3 2.3c.4.4.4 1 0 1.4c-.3.4-.7.7-.7 1s.3.7.6 1c.5.5 1 1 .9 1.4c0 .5-.5 1-1 1.5L16.4 16L15 14.7l4.2-4.2l-1-1zm-6.9-.7l2.5-2.5l3.8 3.8l-2.5 2.5z"></svg:path>`,
})
export class MdiPenOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPenPlusIcon],svg[mdi-pen-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.7 7c-.3.4-.7.7-.7 1s.3.6.6 1c.5.5 1 .9.9 1.4c0 .5-.5 1-1 1.5L16.4 16L15 14.7l4.2-4.2l-1-1l-1.4 1.4L13 7.1l4-3.8c.4-.4 1-.4 1.4 0l2.3 2.3c.4.4.4 1.1 0 1.4M3 17.2l9.6-9.6l3.7 3.8L6.8 21H3zM7 2v3h3v2H7v3H5V7H2V5h3V2z"></svg:path>`,
})
export class MdiPenPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPenRemoveIcon],svg[mdi-pen-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.7 7c-.3.4-.7.7-.7 1s.3.6.6 1c.5.5 1 .9.9 1.4c0 .5-.5 1-1 1.5L16.4 16L15 14.7l4.2-4.2l-1-1l-1.4 1.4L13 7.1l4-3.8c.4-.4 1-.4 1.4 0l2.3 2.3c.4.4.4 1.1 0 1.4M3 17.2l9.6-9.6l3.7 3.8L6.8 21H3zm.88-14.74L6 4.59l2.12-2.13l1.42 1.42L7.41 6l2.13 2.12l-1.42 1.42L6 7.41L3.88 9.54L2.46 8.12L4.59 6L2.46 3.88z"></svg:path>`,
})
export class MdiPenRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPencilIcon],svg[mdi-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"></svg:path>`,
})
export class MdiPencilIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPencilBoxIcon],svg[mdi-pencil-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-2.3 6.35c.22-.21.22-.56 0-.77L15.42 7.3a.53.53 0 0 0-.77 0l-1 1l2.05 2.05zM7 14.94V17h2.06l6.06-6.06l-2.06-2.06z"></svg:path>`,
})
export class MdiPencilBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPencilBoxMultipleIcon],svg[mdi-pencil-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.22 2H7.78C6.8 2 6 2.8 6 3.78v12.44C6 17.2 6.8 18 7.78 18h12.44c.98 0 1.78-.79 1.78-1.78V3.78C22 2.8 21.2 2 20.22 2m-9.16 13H9v-2.06l6.06-6.06l2.06 2.06zm7.64-7.65l-1 1l-2.05-2.05l1-1c.21-.22.56-.22.77 0l1.28 1.28c.22.21.22.56 0 .77M4 6H2v14a2 2 0 0 0 2 2h14v-2H4z"></svg:path>`,
})
export class MdiPencilBoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPencilBoxMultipleOutlineIcon],svg[mdi-pencil-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6H2v14a2 2 0 0 0 2 2h14v-2H4zm14.7 1.35l-1 1l-2.05-2.05l1-1c.21-.22.56-.22.77 0l1.28 1.28c.22.21.22.56 0 .77M9 12.94l6.06-6.06l2.06 2.06L11.06 15H9zM20 4v12H8V4zm0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2"></svg:path>`,
})
export class MdiPencilBoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPencilBoxOutlineIcon],svg[mdi-pencil-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19V5H5v14zm0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-2.3 6.35l-1 1l-2.05-2.05l1-1c.21-.22.56-.22.77 0l1.28 1.28c.22.21.22.56 0 .77M7 14.94l6.06-6.06l2.06 2.06L9.06 17H7z"></svg:path>`,
})
export class MdiPencilBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPencilCircleIcon],svg[mdi-pencil-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m3.1 5.07c.14 0 .28.05.4.16l1.27 1.27c.23.22.23.57 0 .78l-1 1l-2.05-2.05l1-1c.1-.11.24-.16.38-.16m-1.97 1.74l2.06 2.06l-6.06 6.06H7.07v-2.06z"></svg:path>`,
})
export class MdiPencilCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPencilCircleOutlineIcon],svg[mdi-pencil-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 14.94l6.06-6.06l2.06 2.06L9.06 17H7zM12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m4.7-10.65l-1 1l-2.05-2.05l1-1c.21-.22.56-.22.77 0l1.28 1.28c.22.21.22.56 0 .77M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2"></svg:path>`,
})
export class MdiPencilCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPencilLockIcon],svg[mdi-pencil-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 2A2.5 2.5 0 0 0 3 4.5V5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1v-.5A2.5 2.5 0 0 0 5.5 2m0 1A1.5 1.5 0 0 1 7 4.5V5H4v-.5A1.5 1.5 0 0 1 5.5 3m14.16 0c-.26 0-.5.09-.69.28l-1.84 1.85l3.75 3.75l1.84-1.85c.39-.39.39-1.03 0-1.4l-2.34-2.35c-.2-.19-.47-.28-.72-.28m-3.6 3.19L5 17.25V21h3.75L19.81 9.94z"></svg:path>`,
})
export class MdiPencilLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPencilLockOutlineIcon],svg[mdi-pencil-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.1 9l.9.9L7.9 19H7v-.9zm3.6-6c-.2 0-.5.1-.7.3l-1.8 1.8l3.7 3.8L22.7 7c.4-.4.4-1 0-1.4l-2.3-2.3c-.2-.2-.5-.3-.7-.3m-3.6 3.2L5 17.2V21h3.8l11-11.1zM8 5v-.5C8 3.1 6.9 2 5.5 2S3 3.1 3 4.5V5c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h5c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1M7 5H4v-.5C4 3.7 4.7 3 5.5 3S7 3.7 7 4.5z"></svg:path>`,
})
export class MdiPencilLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPencilMinusIcon],svg[mdi-pencil-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.7 7c.4-.4.4-1 0-1.4l-2.3-2.3c-.4-.4-1-.4-1.4 0l-1.8 1.8L19 8.9M3 17.2V21h3.8l11-11.1l-3.7-3.8zM10 5v2H2V5z"></svg:path>`,
})
export class MdiPencilMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPencilMinusOutlineIcon],svg[mdi-pencil-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.1 9l.9.9L5.9 19H5v-.9zm3.6-6c-.2 0-.5.1-.7.3l-1.8 1.8l3.7 3.8L20.7 7c.4-.4.4-1 0-1.4l-2.3-2.3c-.2-.2-.5-.3-.7-.3m-3.6 3.2L3 17.2V21h3.8l11-11.1zM10 5v2H2V5z"></svg:path>`,
})
export class MdiPencilMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPencilOffIcon],svg[mdi-pencil-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.66 2c-.26 0-.5.09-.69.28l-1.84 1.85l3.75 3.75l1.84-1.85c.39-.39.39-1.03 0-1.4l-2.34-2.35c-.2-.19-.47-.28-.72-.28M3.28 4L2 5.28l6.5 6.47l-4.5 4.5V20h3.75l4.5-4.5l6.47 6.5L20 20.72l-6.5-6.47l-3.75-3.75zm11.78 1.19l-4.03 4.03l3.75 3.75l4.03-4.03z"></svg:path>`,
})
export class MdiPencilOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPencilOffOutlineIcon],svg[mdi-pencil-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 10.2l4-4l3.8 3.8l-4 4l-1.4-1.4L15 9.9l-.9-.9l-2.6 2.6zm10.7-4.6l-2.3-2.3c-.2-.2-.5-.3-.7-.3s-.5.1-.7.3l-1.8 1.8L19 8.9L20.7 7c.4-.3.4-1 0-1.4M19 21.7L17.7 23l-6.5-6.5L6.8 21H3v-3.8l4.5-4.5L1 6.3L2.3 5zm-9.2-6.6l-.9-.9L5 18.1v.9h.9z"></svg:path>`,
})
export class MdiPencilOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPencilOutlineIcon],svg[mdi-pencil-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.06 9l.94.94L5.92 19H5v-.92zm3.6-6c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"></svg:path>`,
})
export class MdiPencilOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPencilPlusIcon],svg[mdi-pencil-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.7 7c.4-.4.4-1 0-1.4l-2.3-2.3c-.4-.4-1-.4-1.4 0l-1.8 1.8L19 8.9M3 17.2V21h3.8l11-11.1l-3.7-3.8zM7 2v3h3v2H7v3H5V7H2V5h3V2z"></svg:path>`,
})
export class MdiPencilPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPencilPlusOutlineIcon],svg[mdi-pencil-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.1 9l.9.9L5.9 19H5v-.9zm3.6-6c-.2 0-.5.1-.7.3l-1.8 1.8l3.7 3.8L20.7 7c.4-.4.4-1 0-1.4l-2.3-2.3c-.2-.2-.5-.3-.7-.3m-3.6 3.2L3 17.2V21h3.8l11-11.1zM7 2v3h3v2H7v3H5V7H2V5h3V2z"></svg:path>`,
})
export class MdiPencilPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPencilRemoveIcon],svg[mdi-pencil-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.7 7c.4-.4.4-1 0-1.4l-2.3-2.3c-.4-.4-1-.4-1.4 0l-1.8 1.8L19 8.9M3 17.2V21h3.8l11-11.1l-3.7-3.8zm.9-14.8L6 4.5l2.1-2.1l1.4 1.4l-2.1 2.1L9.5 8L8.1 9.5L6 7.4L3.9 9.5L2.5 8.1L4.6 6L2.5 3.8z"></svg:path>`,
})
export class MdiPencilRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPencilRemoveOutlineIcon],svg[mdi-pencil-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.7 3c-.2 0-.5.1-.7.3l-1.8 1.8l3.7 3.8L20.7 7c.4-.4.4-1 0-1.4l-2.3-2.3c-.2-.2-.5-.3-.7-.3m-3.6 3.2L3 17.2V21h3.8l11-11.1zM5.9 19H5v-.9L14.1 9l.9.9zm-2-16.5L6 4.6l2.1-2.1l1.4 1.4L7.4 6l2.1 2.1l-1.4 1.4L6 7.4L3.9 9.5L2.5 8.1L4.6 6L2.5 3.9z"></svg:path>`,
})
export class MdiPencilRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPencilRulerIcon],svg[mdi-pencil-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.93l-3.75-3.75zm19.61 1.11l-4.25 4.25l-5.2-5.2l1.77-1.77l1 1l2.47-2.48l1.42 1.42L18.36 17l1.06 1l1.42-1.4zm-16-7.53L1.39 5.64l4.25-4.25L7.4 3.16L4.93 5.64L6 6.7l2.46-2.48l1.42 1.42l-1.42 1.41l1 1zM20.71 7c.39-.39.39-1 0-1.41l-2.34-2.3c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75z"></svg:path>`,
})
export class MdiPencilRulerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPencilRulerOutlineIcon],svg[mdi-pencil-ruler-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.61 18.36l-4.25 4.25l-5.2-5.2l1.77-1.77l1 1l2.47-2.48l1.42 1.42L18.36 17l1.06 1l1.42-1.4zm-16-7.53L1.39 5.64l4.25-4.25L7.4 3.16L4.93 5.64L6 6.7l2.46-2.48l1.42 1.42l-1.42 1.41l1 1zM14.06 9l.94.93L5.92 19H5v-.92zm3.61-6c-.25 0-.51.09-.71.29l-1.84 1.83l3.75 3.75L20.71 7c.39-.39.39-1 0-1.41l-2.34-2.3a.98.98 0 0 0-.7-.29m-3.61 3.18L3 17.25V21h3.75L17.81 9.93z"></svg:path>`,
})
export class MdiPencilRulerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPenguinIcon],svg[mdi-penguin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 16c0 1.72-.63 3.3-1.66 4.5c.41.39.66.91.66 1.5H6c0-.59.25-1.11.66-1.5A6.9 6.9 0 0 1 5 16H3c0-1.25.57-2.36 1.46-3.09l.01-.02A6 6 0 0 0 7 8V7a5 5 0 0 1 5-5a5 5 0 0 1 5 5v1c0 2 1 3.81 2.53 4.89l.01.02c.89.73 1.46 1.84 1.46 3.09zm-3 0a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4m-6-7l2 1.5L14 9l-2-1.5zm0-4a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiPenguinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPentagonIcon],svg[mdi-pentagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.5L2 9.8l3.8 11.7h12.4L22 9.8z"></svg:path>`,
})
export class MdiPentagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPentagonOutlineIcon],svg[mdi-pentagon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 5l7.6 5.5l-2.9 8.9H7.3l-2.9-8.9zm0-2.5L2 9.8l3.8 11.7h12.3L22 9.8z"></svg:path>`,
})
export class MdiPentagonOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPentagramIcon],svg[mdi-pentagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.15 14.4l2.56 7.86L12 17.4l-6.72 4.9l2.57-7.93l-6.7-4.87h8.29L12 1.61l2.56 7.89h8.33zm-2.85 2.07l2.56 1.86l-.98-3.01zM11 9.5h2l-1-3.03zm-.26 6.97L9.13 15.3l-1 3.07zM18.28 11h-3.23l.62 1.9zm-7.75 0l-.91 2.8L12 15.54l2.39-1.72l-.92-2.82zm-4.77 0l2.58 1.87l.61-1.87z"></svg:path>`,
})
export class MdiPentagramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPercentIcon],svg[mdi-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.5 3.5l-15 15l2 2l15-15M7 4a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m10 10a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></svg:path>`,
})
export class MdiPercentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPercentBoxIcon],svg[mdi-percent-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2M8.83 7.05c.98 0 1.77.79 1.77 1.78c0 .98-.79 1.77-1.77 1.77c-.99 0-1.78-.79-1.78-1.77c0-.99.79-1.78 1.78-1.78M15.22 17c-.98 0-1.77-.8-1.77-1.78s.79-1.77 1.77-1.77s1.78.79 1.78 1.77S16.2 17 15.22 17m-6.72.03L7 15.53L15.53 7l1.5 1.5z"></svg:path>`,
})
export class MdiPercentBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPercentBoxOutlineIcon],svg[mdi-percent-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14zm-2-3.78c0 .98-.8 1.78-1.78 1.78s-1.77-.8-1.77-1.78s.79-1.77 1.77-1.77s1.78.79 1.78 1.77m-8.5 1.81L7 15.53L15.53 7l1.5 1.5zm-1.45-8.2c0-.99.79-1.78 1.78-1.78c.98 0 1.77.79 1.77 1.78c0 .98-.79 1.77-1.77 1.77c-.99 0-1.78-.79-1.78-1.77"></svg:path>`,
})
export class MdiPercentBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPercentCircleIcon],svg[mdi-percent-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2M8.83 7.05c.98 0 1.77.79 1.77 1.78c0 .98-.79 1.77-1.77 1.77c-.99 0-1.78-.79-1.78-1.77c0-.99.79-1.78 1.78-1.78M15.22 17c-.98 0-1.77-.8-1.77-1.78s.79-1.77 1.77-1.77s1.78.79 1.78 1.77S16.2 17 15.22 17m-6.72.03L7 15.53L15.53 7l1.5 1.5z"></svg:path>`,
})
export class MdiPercentCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPercentCircleOutlineIcon],svg[mdi-percent-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15.22c0 .98-.8 1.78-1.78 1.78s-1.77-.8-1.77-1.78s.79-1.77 1.77-1.77s1.78.79 1.78 1.77M8.83 10.6c.98 0 1.77-.79 1.77-1.77c0-.99-.79-1.78-1.77-1.78c-.99 0-1.78.79-1.78 1.78c0 .98.79 1.77 1.78 1.77M7 15.53l1.5 1.5l8.53-8.53l-1.5-1.5zM22 12c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.41-3.59-8-8-8s-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8"></svg:path>`,
})
export class MdiPercentCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPercentOutlineIcon],svg[mdi-percent-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.5 3.5l2 2l-15 15l-2-2zM7 4c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3m10 10c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3M7 6c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m10 10c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class MdiPercentOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPeriodicTableIcon],svg[mdi-periodic-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v2h2V4zm18 0v2h2V4zM2 7v2h2V7zm3 0v2h2V7zm9 0v2h2V7zm3 0v2h2V7zm3 0v2h2V7zM2 10v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zM2 13v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zM5 17v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2zm3 0v2h2v-2z"></svg:path>`,
})
export class MdiPeriodicTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPeriscopeIcon],svg[mdi-periscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 7a2 2 0 0 1-2 2a2 2 0 0 1-2-2c-.63.84-1 1.87-1 3a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5c-.43 0-.84.05-1.23.15C11.5 5.45 12 6.17 12 7m0-5a8 8 0 0 1 8 8c0 1.05-.2 2.04-.57 2.96C17.89 17.38 13.63 22 12 22s-5.89-4.62-7.43-9.04A7.88 7.88 0 0 1 4 10a8 8 0 0 1 8-8z" fill="currentColor"></svg:path>`,
})
export class MdiPeriscopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPerspectiveLessIcon],svg[mdi-perspective-less-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.56 12l2.67 8H4.78l2.66-8zM7 1L3 5l4 4V6h4V4H7zm10 0v3h-4v2h4v3l4-4zm1 9H6L2 22h20z"></svg:path>`,
})
export class MdiPerspectiveLessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPerspectiveMoreIcon],svg[mdi-perspective-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.56 12l2.67 8H4.78l2.66-8zM17 1l-4 4l4 4V6h4V4h-4zM7 1v3H3v2h4v3l4-4zm11 9H6L2 22h20z"></svg:path>`,
})
export class MdiPerspectiveMoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhIcon],svg[mdi-ph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7v10h2v-4h2v4h2V7h-2v4h-2V7zm-2 8v-2a2 2 0 0 0-2-2H5v10h2v-4h2c1.11 0 2-.89 2-2m-2 0H7v-2h2z"></svg:path>`,
})
export class MdiPhIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneIcon],svg[mdi-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"></svg:path>`,
})
export class MdiPhoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneAlertIcon],svg[mdi-phone-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4c0-.56.45-1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57c.11.35.03.74-.25 1.01zM17 12v-2h2v2zm0-4V2h2v6z"></svg:path>`,
})
export class MdiPhoneAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneAlertOutlineIcon],svg[mdi-phone-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4zm-2-7v-2h2v2zm0-4V2h2v6z"></svg:path>`,
})
export class MdiPhoneAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneBluetoothIcon],svg[mdi-phone-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5c-1.25 0-2.45-.2-3.57-.57c-.35-.11-.74-.03-1.02.25l-2.2 2.2a15.1 15.1 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1m-2-8.29l.94.93l-.94.94m0-6.17l.94.94l-.94.94M14.71 9.5L17 7.21V11h.5l2.85-2.86L18.21 6l2.14-2.15L17.5 1H17v3.79L14.71 2.5l-.71.71L16.79 6L14 8.79z"></svg:path>`,
})
export class MdiPhoneBluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneBluetoothOutlineIcon],svg[mdi-phone-bluetooth-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4zM18 7.21l.94.93l-.94.94m0-6.17l.94.94l-.94.94M14.71 9.5L17 7.21V11h.5l2.85-2.86L18.21 6l2.14-2.15L17.5 1H17v3.79L14.71 2.5l-.71.71L16.79 6L14 8.79z"></svg:path>`,
})
export class MdiPhoneBluetoothOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneCancelIcon],svg[mdi-phone-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02zM16.5 2C14 2 12 4 12 6.5s2 4.5 4.5 4.5S21 9 21 6.5S19 2 16.5 2m0 7.5c-1.66 0-3-1.34-3-3c0-.56.15-1.08.42-1.5L18 9.08c-.42.27-.94.42-1.5.42M19.08 8L15 3.92c.42-.27.94-.42 1.5-.42c1.66 0 3 1.34 3 3c0 .56-.15 1.08-.42 1.5"></svg:path>`,
})
export class MdiPhoneCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneCancelOutlineIcon],svg[mdi-phone-cancel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4zM16.5 2C14 2 12 4 12 6.5s2 4.5 4.5 4.5S21 9 21 6.5S19 2 16.5 2m0 7.5c-1.66 0-3-1.34-3-3c0-.56.15-1.08.42-1.5L18 9.08c-.42.27-.94.42-1.5.42M19.08 8L15 3.92c.42-.27.94-.42 1.5-.42c1.66 0 3 1.34 3 3c0 .56-.15 1.08-.42 1.5"></svg:path>`,
})
export class MdiPhoneCancelOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneCheckIcon],svg[mdi-phone-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.62 10.79a15.1 15.1 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.25a11.4 11.4 0 0 0 3.59.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1a11.4 11.4 0 0 0 .57 3.57a1 1 0 0 1-.25 1m12.89-3.86l-1.42-1.42L15 8.59l-2.29-2.3l-1.42 1.42l3.71 3.7Z"></svg:path>`,
})
export class MdiPhoneCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneCheckOutlineIcon],svg[mdi-phone-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5a11.4 11.4 0 0 1-3.57-.57a1 1 0 0 0-1 .25l-2.2 2.2a15.1 15.1 0 0 1-6.59-6.59l2.2-2.2a1 1 0 0 0 .25-1A11.4 11.4 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1M5 5h1.54A12.5 12.5 0 0 0 7 7.59L5.79 8.8A15 15 0 0 1 5 5m14 14a15 15 0 0 1-3.8-.76L16.41 17a12.3 12.3 0 0 0 2.59.45m-4-6.01l-3.71-3.7l1.42-1.42L15 8.59l5.29-5.3l1.42 1.42Z"></svg:path>`,
})
export class MdiPhoneCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneClassicIcon],svg[mdi-phone-classic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3C7.46 3 3.34 4.78.29 7.67c-.18.18-.29.43-.29.71s.11.53.29.71l2.48 2.48a1.01 1.01 0 0 0 1.41.01c.79-.74 1.69-1.36 2.66-1.85c.33-.16.56-.5.56-.9v-3.1C8.85 5.25 10.39 5 12 5c1.59 0 3.14.25 4.59.72v3.1c0 .39.23.74.56.9c.98.49 1.85 1.12 2.67 1.85c.18.18.43.28.68.28c.3 0 .55-.11.73-.29l2.48-2.48c.18-.18.29-.43.29-.71s-.12-.52-.3-.7A16.97 16.97 0 0 0 12 3M9 7v3s-6 5-6 8v4h18v-4c0-3-6-8-6-8V7h-2v2h-2V7zm3 5a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 1.5A2.5 2.5 0 0 0 9.5 16a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"></svg:path>`,
})
export class MdiPhoneClassicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneClassicOffIcon],svg[mdi-phone-classic-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c4.53 0 8.65 1.78 11.7 4.67c.18.18.3.42.3.7s-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.73.29c-.25 0-.5-.1-.68-.28c-.82-.73-1.69-1.36-2.67-1.85c-.33-.16-.56-.51-.56-.9v-3.1C15.14 5.25 13.59 5 12 5c-1.56 0-3.07.24-4.5.69L5.94 4.11C7.82 3.4 9.86 3 12 3M9 7h2v2h2V7h2v3s6 5 6 8v1.18l-12-12zM1 4.27L2.28 3L21.5 22.22l-1.27 1.28l-1.5-1.5H3v-4c0-2.14 3.05-5.29 4.8-6.93L6.59 9.86c-.88.47-1.69 1.04-2.41 1.72a1.015 1.015 0 0 1-1.41-.01L.29 9.09A1 1 0 0 1 0 8.38c0-.28.11-.53.29-.71C.996 7 2.58 5.85 2.58 5.85zM8 16a3.999 3.999 0 0 0 7.17 2.44l-1.07-1.08A2.5 2.5 0 0 1 9.5 16c0-.88.45-1.65 1.14-2.09l-1.08-1.08C8.61 13.56 8 14.71 8 16"></svg:path>`,
})
export class MdiPhoneClassicOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneClockIcon],svg[mdi-phone-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.9 1C12.1 1.1 9 4.2 9 8c0 3.9 3.1 7 7 7s7-3.1 7-7s-3.1-7-7.1-7c.1 0 0 0 0 0m.1 2c2.8 0 5 2.2 5 5s-2.2 5-5 5s-5-2.2-5-5s2.2-5 5-5m-1 1v5l3.6 2.2l.8-1.2l-2.9-1.7V4zM4.6 12.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2q1.65.6 3.6.6c.5 0 1 .5 1 1V22c0 .5-.5 1-1 1C8.6 23 1 15.4 1 6c0-.6.5-1 1-1h3.5c.6 0 1 .4 1 1q0 1.8.6 3.6c.1.4 0 .7-.2 1z"></svg:path>`,
})
export class MdiPhoneClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneDialIcon],svg[mdi-phone-dial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2q1.65.6 3.6.6c.6 0 1 .4 1 1V20c0 .6-.4 1-1 1c-9.4 0-17-7.6-17-17c0-.6.5-1 1-1h3.5c.6 0 1 .4 1 1q0 1.8.6 3.6c.1.3 0 .7-.2 1zM14 3c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m3 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m3 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-6 3c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m3 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m3 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-6 3c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m3 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m3 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class MdiPhoneDialIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneDialOutlineIcon],svg[mdi-phone-dial-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4zM15 4c0 .6-.4 1-1 1s-1-.4-1-1s.4-1 1-1s1 .4 1 1m3 0c0 .6-.4 1-1 1s-1-.4-1-1s.4-1 1-1s1 .4 1 1m3 0c0 .6-.4 1-1 1s-1-.4-1-1s.4-1 1-1s1 .4 1 1m-6 3c0 .6-.4 1-1 1s-1-.4-1-1s.4-1 1-1s1 .4 1 1m3 0c0 .6-.4 1-1 1s-1-.4-1-1s.4-1 1-1s1 .4 1 1m3 0c0 .6-.4 1-1 1s-1-.4-1-1s.4-1 1-1s1 .4 1 1m-6 3c0 .6-.4 1-1 1s-1-.4-1-1s.4-1 1-1s1 .4 1 1m3 0c0 .6-.4 1-1 1s-1-.4-1-1s.4-1 1-1s1 .4 1 1m3 0c0 .6-.4 1-1 1s-1-.4-1-1s.4-1 1-1s1 .4 1 1"></svg:path>`,
})
export class MdiPhoneDialOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneForwardIcon],svg[mdi-phone-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5c-1.25 0-2.45-.2-3.57-.57c-.35-.11-.74-.03-1.02.25l-2.2 2.2a15.1 15.1 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1M18 11l5-5l-5-5v3h-4v4h4z"></svg:path>`,
})
export class MdiPhoneForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneForwardOutlineIcon],svg[mdi-phone-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4zm-1-8l5-5l-5-5v3h-4v4h4z"></svg:path>`,
})
export class MdiPhoneForwardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneHangupIcon],svg[mdi-phone-hangup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .4-.23.74-.56.9c-.98.49-1.87 1.12-2.67 1.85c-.17.18-.42.29-.67.29c-.3 0-.55-.12-.73-.3L.29 13.08a1 1 0 0 1-.29-.7c0-.28.11-.53.29-.71C3.34 8.77 7.46 7 12 7s8.66 1.77 11.71 4.67c.18.18.29.43.29.71c0 .27-.11.52-.29.7l-2.48 2.48c-.18.18-.43.3-.73.3a.98.98 0 0 1-.68-.29c-.79-.73-1.68-1.36-2.66-1.85a1 1 0 0 1-.56-.9v-3.1C15.15 9.25 13.6 9 12 9"></svg:path>`,
})
export class MdiPhoneHangupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneHangupOutlineIcon],svg[mdi-phone-hangup-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.71 11.67a17 17 0 0 0-23.42 0a1 1 0 0 0-.29.71a1 1 0 0 0 .29.7l2.48 2.48a1 1 0 0 0 .73.29a1 1 0 0 0 .68-.28a11.5 11.5 0 0 1 2.66-1.85a1 1 0 0 0 .56-.9v-3.1A14.9 14.9 0 0 1 12 9a14.5 14.5 0 0 1 4.59.73v3.1a1 1 0 0 0 .56.9a11.3 11.3 0 0 1 2.67 1.85a1 1 0 0 0 .68.28a1 1 0 0 0 .73-.29l2.48-2.48a1 1 0 0 0 0-1.42m-18.31.55a13.7 13.7 0 0 0-1.87 1.28l-1.07-1.08A15.5 15.5 0 0 1 5.4 10.5m15.1 3a14 14 0 0 0-1.9-1.27v-1.7a14.3 14.3 0 0 1 2.95 1.9Z"></svg:path>`,
})
export class MdiPhoneHangupOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneInTalkIcon],svg[mdi-phone-in-talk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12h2a5 5 0 0 0-5-5v2a3 3 0 0 1 3 3m4 0h2c0-5-4.03-9-9-9v2c3.86 0 7 3.13 7 7m1 3.5c-1.25 0-2.45-.2-3.57-.57c-.35-.11-.74-.03-1.02.25l-2.2 2.2a15.1 15.1 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiPhoneInTalkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneInTalkOutlineIcon],svg[mdi-phone-in-talk-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4zm-4-7h2a5 5 0 0 0-5-5v2a3 3 0 0 1 3 3m4 0h2c0-5-4.03-9-9-9v2c3.86 0 7 3.13 7 7"></svg:path>`,
})
export class MdiPhoneInTalkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneIncomingIcon],svg[mdi-phone-incoming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.4 11.4 0 0 1 8.5 4a1 1 0 0 0-1-1zm15 8V9.5h-3.5L21 4l-1-1l-5.5 5.5V5H13v6z"></svg:path>`,
})
export class MdiPhoneIncomingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneIncomingOutgoingIcon],svg[mdi-phone-incoming-outgoing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17.5V21c0 .55-.45 1-1 1C9.61 22 2 14.39 2 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1l-2.2 2.21c1.44 2.84 3.76 5.15 6.59 6.59l2.2-2.2c.28-.27.67-.35 1.02-.24c1.12.37 2.32.57 3.57.57c.55 0 1 .45 1 1m-4-10h-3.5L18 2l-1-1l-5.5 5.5V3H10v6h6zM17 6v1.5h3.5L15 13l1 1l5.5-5.5V12H23V6z"></svg:path>`,
})
export class MdiPhoneIncomingOutgoingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneIncomingOutgoingOutlineIcon],svg[mdi-phone-incoming-outgoing-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 16.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H3c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M4 6h1.5c.1.9.3 1.8.5 2.6L4.8 9.8C4.4 8.6 4.1 7.3 4 6m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4zM16 9V7.5h-3.5L18 2l-1-1l-5.5 5.5V3H10v6zm1-3v1.5h3.5L15 13l1 1l5.5-5.5V12H23V6z"></svg:path>`,
})
export class MdiPhoneIncomingOutgoingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneIncomingOutlineIcon],svg[mdi-phone-incoming-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4zm0-8V9.5h-3.5L21 4l-1-1l-5.5 5.5V5H13v6z"></svg:path>`,
})
export class MdiPhoneIncomingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneLockIcon],svg[mdi-phone-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.2 4h-3.4v-.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7m.8.5v-.5A2.5 2.5 0 0 0 17.5 1A2.5 2.5 0 0 0 15 3.5V4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m0 11.5c-1.25 0-2.45-.2-3.57-.57c-.35-.11-.74-.03-1.02.25l-2.2 2.2a15.1 15.1 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiPhoneLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneLockOutlineIcon],svg[mdi-phone-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4zm.2-15h-3.4v-.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7m.8.5v-.5A2.5 2.5 0 0 0 17.5 1A2.5 2.5 0 0 0 15 3.5V4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiPhoneLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneLogIcon],svg[mdi-phone-log-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57c.11.35.03.74-.25 1.01l-2.2 2.21c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57M12 3h2v2h-2m3-2h6v2h-6m-3 1h2v2h-2m3-2h6v2h-6m-3 1h2v2h-2m3-2h6v2h-6"></svg:path>`,
})
export class MdiPhoneLogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneLogOutlineIcon],svg[mdi-phone-log-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4zM12 3h2v2h-2m3-2h6v2h-6m-3 1h2v2h-2m3-2h6v2h-6m-3 1h2v2h-2m3-2h6v2h-6Z"></svg:path>`,
})
export class MdiPhoneLogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneMessageIcon],svg[mdi-phone-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.07 15.07 0 0 1-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1M12 3v10l3-3h6V3z"></svg:path>`,
})
export class MdiPhoneMessageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneMessageOutlineIcon],svg[mdi-phone-message-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5c-1.25 0-2.45-.2-3.57-.57c-.1-.03-.21-.05-.31-.05c-.26 0-.51.12-.71.29l-2.2 2.2a15.07 15.07 0 0 1-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1M5.03 5h1.5c.07.88.22 1.75.47 2.59L5.79 8.8c-.41-1.21-.67-2.48-.76-3.8M19 18.97c-1.32-.09-2.6-.35-3.8-.76L16.4 17c.85.25 1.72.4 2.6.46zM12 3v10l3-3h6V3zm7 5h-5V5h5z"></svg:path>`,
})
export class MdiPhoneMessageOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneMinusIcon],svg[mdi-phone-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1c-1.24 0-2.45-.2-3.57-.57c-.35-.11-.74-.03-1.02.25l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.24 8.5 4a1 1 0 0 0-1-1M13 6v2h8V6"></svg:path>`,
})
export class MdiPhoneMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneMinusOutlineIcon],svg[mdi-phone-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4zM13 6v2h8V6Z"></svg:path>`,
})
export class MdiPhoneMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneMissedIcon],svg[mdi-phone-missed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.71 16.67C20.66 13.77 16.54 12 12 12S3.34 13.77.29 16.67c-.18.18-.29.43-.29.71c0 .27.11.52.29.7l2.48 2.48c.18.18.43.3.73.3c.25 0 .5-.11.68-.29c.79-.74 1.68-1.36 2.66-1.85c.33-.16.56-.5.56-.9v-3.1c1.45-.47 2.99-.72 4.6-.72c1.6 0 3.15.25 4.6.72v3.1c0 .4.23.74.56.9c.98.49 1.87 1.11 2.66 1.85c.18.18.43.29.68.29c.3 0 .55-.12.73-.3l2.48-2.48a1 1 0 0 0 .29-.7c0-.28-.11-.53-.29-.71M6.5 5.5L12 11l7-7l-1-1l-6 6l-4.5-4.5H11V3H5v6h1.5z"></svg:path>`,
})
export class MdiPhoneMissedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneMissedOutlineIcon],svg[mdi-phone-missed-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.6 15.5v1.8c.7.4 1.3.8 1.9 1.3l1.1-1.1c-.9-.9-1.9-1.5-3-2m-13.2 0c-1 .5-2 1.1-2.9 1.9l1.1 1.1c.6-.5 1.2-.9 1.9-1.3v-1.7M12 12c4.5 0 8.7 1.7 11.7 4.7c.2.2.3.4.3.7s-.1.5-.3.7l-2.5 2.5c-.2.2-.4.3-.7.3c-.2 0-.5-.1-.7-.3c-.8-.7-1.7-1.4-2.7-1.8c-.3-.2-.6-.5-.6-.9v-3.1c-1.5-.5-3-.7-4.6-.7s-3.1.2-4.6.7v3.1q0 .6-.6.9q-1.5.75-2.7 1.8c-.2.2-.4.3-.7.3s-.5-.1-.7-.3L.1 18.1c0-.2-.1-.5-.1-.7c0-.3.1-.5.3-.7C3.3 13.8 7.5 12 12 12M6.5 5.5V9H5V3h6v1.5H7.5L12 9l6-6l1 1l-7 7z"></svg:path>`,
})
export class MdiPhoneMissedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneOffIcon],svg[mdi-phone-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.22 2.5L2.5 20.22l1.27 1.28l4.88-4.88C11.76 19.43 15.81 21 20 21a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1c-1.25 0-2.45-.2-3.57-.57c-.35-.11-.74-.03-1.02.25l-2.2 2.2c-1.15-.58-2.21-1.32-3.15-2.17L21.5 3.77zM4 3a1 1 0 0 0-1 1c0 3.57 1.14 7.05 3.24 9.94l1.42-1.44a14 14 0 0 1-1.04-1.71l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4a1 1 0 0 0-1-1z"></svg:path>`,
})
export class MdiPhoneOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneOffOutlineIcon],svg[mdi-phone-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.4 17c.8.2 1.7.4 2.6.5V19c-1.3-.1-2.6-.3-3.8-.8zm3.8-14.5L2.5 20.2l1.3 1.3l4.9-4.9C11.8 19.4 15.8 21 20 21c.6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-1.1-.6-2.2-1.3-3.1-2.2L21.5 3.8zM6.5 5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5zm1-2H4c-.6 0-1 .4-1 1c0 3.6 1.1 7 3.2 9.9l1.4-1.4c-.4-.5-.7-1.1-1-1.7l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.2-.5-2.4-.5-3.6c0-.6-.4-1-1-1"></svg:path>`,
})
export class MdiPhoneOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneOutgoingIcon],svg[mdi-phone-outgoing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.4 11.4 0 0 1 8.5 4a1 1 0 0 0-1-1zm11 0v1.5h3.5L13 10l1 1l5.5-5.5V9H21V3z"></svg:path>`,
})
export class MdiPhoneOutgoingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneOutgoingOutlineIcon],svg[mdi-phone-outgoing-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4zM15 3v1.5h3.5L13 10l1 1l5.5-5.5V9H21V3z"></svg:path>`,
})
export class MdiPhoneOutgoingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneOutlineIcon],svg[mdi-phone-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4z"></svg:path>`,
})
export class MdiPhoneOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhonePausedIcon],svg[mdi-phone-paused-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10h2V3h-2m1 12.5c-1.25 0-2.45-.2-3.57-.57c-.35-.11-.74-.03-1.02.25l-2.2 2.2a15.1 15.1 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1M17 3h-2v7h2z"></svg:path>`,
})
export class MdiPhonePausedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhonePausedOutlineIcon],svg[mdi-phone-paused-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4zm0-9h2V3h-2m-2 0h-2v7h2z"></svg:path>`,
})
export class MdiPhonePausedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhonePlusIcon],svg[mdi-phone-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1c-1.24 0-2.45-.2-3.57-.57c-.35-.11-.74-.03-1.02.25l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.24 8.5 4a1 1 0 0 0-1-1M16 3v3h-3v2h3v3h2V8h3V6h-3V3"></svg:path>`,
})
export class MdiPhonePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhonePlusOutlineIcon],svg[mdi-phone-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4zM16 3v3h-3v2h3v3h2V8h3V6h-3V3Z"></svg:path>`,
})
export class MdiPhonePlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneRefreshIcon],svg[mdi-phone-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02zM17 7l1.77-1.77A2.5 2.5 0 1 0 19 8.5h1.71A3.99 3.99 0 0 1 17 11c-2.21 0-4-1.79-4-4s1.79-4 4-4c1.11 0 2.11.45 2.83 1.17L21 3v4z"></svg:path>`,
})
export class MdiPhoneRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneRefreshOutlineIcon],svg[mdi-phone-refresh-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4zM17 7l1.77-1.77A2.5 2.5 0 1 0 19 8.5h1.71A3.99 3.99 0 0 1 17 11c-2.21 0-4-1.79-4-4s1.79-4 4-4c1.11 0 2.11.45 2.83 1.17L21 3v4z"></svg:path>`,
})
export class MdiPhoneRefreshOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneRemoveIcon],svg[mdi-phone-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3c-.6 0-1 .4-1 1c0 9.4 7.6 17 17 17c.6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1c-1.2 0-2.5-.2-3.6-.6c-.4-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.3-.5-3.5c0-.6-.4-1-1-1m11.6.5L17 5.6l-2.1-2.1l-1.4 1.4L15.6 7l-2.1 2.1l1.4 1.4L17 8.4l2.1 2.1l1.4-1.4L18.4 7l2.1-2.1"></svg:path>`,
})
export class MdiPhoneRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneRemoveOutlineIcon],svg[mdi-phone-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4zm.1-15.5L17 5.6l-2.1-2.1l-1.4 1.4L15.6 7l-2.1 2.1l1.4 1.4L17 8.4l2.1 2.1l1.4-1.4L18.4 7l2.1-2.1z"></svg:path>`,
})
export class MdiPhoneRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneReturnIcon],svg[mdi-phone-return-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6v5h-1.5V7.5h-5.63l2.43 2.43L15.24 11L11 6.75l4.24-4.25l1.06 1.07L13.87 6zM8.82 8.58c.26-.26.35-.65.24-1C8.69 6.42 8.5 5.22 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1c-1.21 0-2.42-.19-3.57-.57a1 1 0 0 0-1 .24l-2.2 2.2a15.1 15.1 0 0 1-6.59-6.59z"></svg:path>`,
})
export class MdiPhoneReturnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneReturnOutlineIcon],svg[mdi-phone-return-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4zm2-13v5h-1.5V7.5h-5.63l2.43 2.43L15.24 11L11 6.75l4.24-4.25l1.06 1.07L13.87 6z"></svg:path>`,
})
export class MdiPhoneReturnOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneRingIcon],svg[mdi-phone-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.71 16.67C20.66 13.78 16.54 12 12 12S3.34 13.78.29 16.67c-.18.18-.29.43-.29.71s.11.53.29.71l2.48 2.48c.18.18.43.29.71.29c.27 0 .52-.11.7-.28c.79-.74 1.69-1.36 2.66-1.85c.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73s3.15.25 4.6.72v3.1c0 .39.23.74.56.9c.98.49 1.87 1.12 2.66 1.85c.18.18.43.28.7.28c.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71a1 1 0 0 0-.29-.7M21.16 6.26l-1.41-1.41l-3.56 3.55l1.41 1.41s3.45-3.52 3.56-3.55M13 2h-2v5h2zM6.4 9.81L7.81 8.4L4.26 4.84L2.84 6.26c.11.03 3.56 3.55 3.56 3.55"></svg:path>`,
})
export class MdiPhoneRingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneRingOutlineIcon],svg[mdi-phone-ring-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.71 16.67C20.66 13.78 16.54 12 12 12S3.34 13.78.29 16.67c-.18.18-.29.43-.29.71s.11.53.29.71l2.48 2.48c.18.18.43.29.71.29c.27 0 .52-.11.7-.28c.79-.74 1.69-1.36 2.66-1.85c.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73s3.15.25 4.6.72v3.1c0 .39.23.74.56.9c.98.49 1.87 1.12 2.66 1.85c.18.18.43.28.7.28c.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71a1 1 0 0 0-.29-.7m-18.31.56c-.66.37-1.29.8-1.87 1.27l-1.07-1.07c.91-.75 1.9-1.39 2.95-1.9v1.7zm15.07 1.26c-.59-.48-1.21-.9-1.87-1.27v-1.7c1.04.51 2.03 1.15 2.94 1.9zm.69-12.23l-1.41-1.41l-3.56 3.55l1.41 1.41s3.45-3.52 3.56-3.55M11 2h2v5h-2zM6.4 9.81L7.81 8.4L4.26 4.84L2.84 6.26c.11.03 3.56 3.55 3.56 3.55"></svg:path>`,
})
export class MdiPhoneRingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneRotateLandscapeIcon],svg[mdi-phone-rotate-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1H3a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2m0 14H3V3h6zm12-2h-8v2h8v6H9v-1H6v1a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m2-3l-4-2l1.91-.91A7.52 7.52 0 0 0 14 2.5V1a9 9 0 0 1 9 9"></svg:path>`,
})
export class MdiPhoneRotateLandscapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneRotatePortraitIcon],svg[mdi-phone-rotate-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1H3a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h1v-3H3V3h6v8h2V3a2 2 0 0 0-2-2m14 20v-6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2M9 21v-6h12v6zm14-11h-1.5c0-3-1.81-5.73-4.58-6.91L16 5l-2-4a9 9 0 0 1 9 9"></svg:path>`,
})
export class MdiPhoneRotatePortraitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneSettingsIcon],svg[mdi-phone-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11h2V9h-2m1 6.5c-1.25 0-2.45-.2-3.57-.57c-.35-.11-.74-.03-1.02.25l-2.2 2.2a15.1 15.1 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1M17 9h-2v2h2m-4-2h-2v2h2z"></svg:path>`,
})
export class MdiPhoneSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneSettingsOutlineIcon],svg[mdi-phone-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4zM17 9h-2v2h2m-4-2h-2v2h2zm6 2h2V9h-2Z"></svg:path>`,
})
export class MdiPhoneSettingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneSyncIcon],svg[mdi-phone-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02zM17 3V1.5l-2.25 2.25L17 6V4.5A2.5 2.5 0 0 1 19.5 7c0 .4-.09.78-.26 1.12l1.09 1.09c.42-.63.67-1.39.67-2.21c0-2.21-1.79-4-4-4m0 6.5A2.5 2.5 0 0 1 14.5 7c0-.4.09-.78.26-1.12l-1.09-1.09C13.25 5.42 13 6.18 13 7c0 2.21 1.79 4 4 4v1.5l2.25-2.25L17 8z"></svg:path>`,
})
export class MdiPhoneSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneSyncOutlineIcon],svg[mdi-phone-sync-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4zM17 3V1.5l-2.25 2.25L17 6V4.5A2.5 2.5 0 0 1 19.5 7c0 .4-.09.78-.26 1.12l1.09 1.09c.42-.63.67-1.39.67-2.21c0-2.21-1.79-4-4-4m0 6.5A2.5 2.5 0 0 1 14.5 7c0-.4.09-.78.26-1.12l-1.09-1.09C13.25 5.42 13 6.18 13 7c0 2.21 1.79 4 4 4v1.5l2.25-2.25L17 8z"></svg:path>`,
})
export class MdiPhoneSyncOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneVoipIcon],svg[mdi-phone-voip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17v2h1a1 1 0 0 1 1 1h7v2h-7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1H2v-2h7a1 1 0 0 1 1-1h1v-2zm10.7-9.33c.18.18.3.42.3.7s-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.73.29c-.25 0-.5-.1-.68-.28c-.82-.73-1.69-1.36-2.67-1.85c-.33-.16-.56-.51-.56-.9v-3.1C15.14 5.25 13.59 5 12 5c-1.6 0-3.15.25-4.6.73v3.1c0 .4-.23.74-.56.9c-.97.49-1.87 1.11-2.66 1.85a1.015 1.015 0 0 1-1.41-.01L.29 9.09A1 1 0 0 1 0 8.38c0-.28.11-.53.29-.71C3.34 4.78 7.46 3 12 3c4.53 0 8.65 1.78 11.7 4.67M11 10v5h-1v-5zm1 0h3v3h-2v2h-1zm2 2v-1h-1v1z"></svg:path>`,
})
export class MdiPhoneVoipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPiIcon],svg[mdi-pi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v2h2v12h2V7h6v9a3 3 0 0 0 3 3a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1a1 1 0 0 1-1-1V7h2V5"></svg:path>`,
})
export class MdiPiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPiBoxIcon],svg[mdi-pi-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M6 7h11v2h-2v5a1 1 0 0 0 1 1a1 1 0 0 0 1-1h2a3 3 0 0 1-3 3a3 3 0 0 1-3-3V9h-3v8H8V9H6"></svg:path>`,
})
export class MdiPiBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPiHoleIcon],svg[mdi-pi-hole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.62 2c3.88 0 5.95 2.29 6.15 5.93c.73-4.36 4.16-3.85 4.16-3.85c.17 2.47-1.86 3.97-4.16 4.09c-.65-1.36-4.52-4.7-4.52-4.7c-.02.03 3.72 3.27 3.58 4.68C8.33 7.88 5.82 6 5.62 2m.44 11.11l3.86-3.86a3 3 0 0 1 4.24 0L18 13.11a2.964 2.964 0 0 1 0 4.24l-3.84 3.86a3 3 0 0 1-4.24 0l-3.86-3.86a3 3 0 0 1 0-4.24m3.33 6.48c0-1.23.76-2.74 2.7-2.74c1.31 0 2.78 1.25 4.22 1.11c-1.44-.04-2.72-1.11-2.72-2.77c0-1.33 1.1-2.29 1.1-3.85c-.06.99-.87 2.43-2.69 2.43c-1.41 0-2.45-1.14-4.13-1.14c.71.04 2.63.67 2.63 2.72c0 1.65-1.11 2.15-1.11 4.24"></svg:path>`,
})
export class MdiPiHoleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPianoIcon],svg[mdi-piano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16a2 2 0 0 0 2 2h16c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m-5.26 12H15v6H9v-6h.31c.55 0 .99-.44.99-1V4h3.45v9c0 .56.44 1 .99 1M4 4h2.8v9c0 .56.44 1 .99 1H8v6H4zm16 16h-4v-6h.26c.55 0 .99-.44.99-1V4H20z"></svg:path>`,
})
export class MdiPianoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPianoOffIcon],svg[mdi-piano-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l.89.89V20a2 2 0 0 0 2 2h16.11l.73.73zM8 20H4V5.89l2.8 2.8V13c0 .56.44 1 .99 1H8zm7 0H9v-6h.31c.55 0 .99-.44.99-1v-.81l4.7 4.7zm1 0v-2.11L18.11 20zM10.3 7.1L5.2 2H20a2 2 0 0 1 2 2v14.8l-2-2V4h-2.75v9c0 .3-.12.55-.32.73l-3.18-3.18V4H10.3z"></svg:path>`,
})
export class MdiPianoOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPickaxeIcon],svg[mdi-pickaxe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.79 10.62L3.5 21.9l-1.4-1.4L13.38 9.21zm4.48-2.89l.59-.59l-.79-.79l.64-.64l-1.42-1.42l-.64.64l-.79-.79l-.59.59c-1.74-1.42-3.7-2.56-5.8-3.36l-.83 1.79c1.75.92 3.36 2.03 4.86 3.34L14 7l3 3l.5-.5c1.31 1.5 2.42 3.11 3.34 4.86l1.79-.83c-.8-2.1-1.94-4.06-3.36-5.8"></svg:path>`,
})
export class MdiPickaxeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPictureInPictureBottomRightIcon],svg[mdi-picture-in-picture-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11h-8v6h8zm4 8V5c0-1.12-.9-2-2-2H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2m-2 0H3V4.97h18z"></svg:path>`,
})
export class MdiPictureInPictureBottomRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPictureInPictureBottomRightOutlineIcon],svg[mdi-picture-in-picture-bottom-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11h-8v6h8zm-2 4h-4v-2h4zm4-12H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5c0-1.12-.9-2-2-2m0 16H3V4.97h18z"></svg:path>`,
})
export class MdiPictureInPictureBottomRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPictureInPictureTopRightIcon],svg[mdi-picture-in-picture-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7h-8v6h8zm2-4H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H3V5h18z"></svg:path>`,
})
export class MdiPictureInPictureTopRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPictureInPictureTopRightOutlineIcon],svg[mdi-picture-in-picture-top-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7h-8v6h8zm-2 4h-4V9h4zm4-8H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5c0-1.09-.9-2-2-2m0 16H3V5h18z"></svg:path>`,
})
export class MdiPictureInPictureTopRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPierIcon],svg[mdi-pier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18c-1.4 0-2.8-.5-4-1.3c-2.4 1.7-5.6 1.7-8 0c-1.2.8-2.6 1.3-4 1.3H2v2h2c1.4 0 2.7-.4 4-1c2.5 1.3 5.5 1.3 8 0c1.3.6 2.6 1 4 1h2v-2zm0-5h-1v3.9c-.7-.1-1.4-.3-2-.7V13h-5v4c-.7 0-1.3-.1-2-.3V13H5v3.9c-.3.1-.7.1-1 .1H3v-4H2v-2h1V9h2v2h5V9h2v2h5V9h2v2h1z"></svg:path>`,
})
export class MdiPierIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPierCraneIcon],svg[mdi-pier-crane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20c-1.39 0-2.78-.47-4-1.33c-2.44 1.71-5.56 1.71-8 0C6.78 19.53 5.39 20 4 20H2v2h2c1.37 0 2.74-.35 4-1c2.5 1.3 5.5 1.3 8 0c1.26.65 2.62 1 4 1h2v-2zm0-16V3a1 1 0 0 0-1-1H9V1H6v1H5v2h1v9H5v-2H3v2H2v2h1v4h1c.33 0 .67-.03 1-.08V15h5v3.65c.65.2 1.33.3 2 .3V15h1v-2h-1v-2h-2v2H9V4h8v4.62c-.47.17-.81.61-.81 1.14c0 .44.24.84.61 1.06V12h.62c.34 0 .61.28.61.62s-.27.62-.61.62c-.22 0-.42-.12-.54-.31a.606.606 0 0 0-.83-.22c-.3.16-.4.54-.23.84c.33.56.94.92 1.6.92c1.01 0 1.84-.83 1.84-1.85c0-.78-.5-1.48-1.23-1.74v-.06c.38-.22.62-.62.62-1.06c0-.46-.27-.85-.65-1.06V4zM8 11.66l-1 1v-1.42l1-1zm0-2.95l-1 1V8.29l1-1zm-1-2V5.29l1-1v1.42z"></svg:path>`,
})
export class MdiPierCraneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPigIcon],svg[mdi-pig-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 9A1.5 1.5 0 0 0 8 10.5A1.5 1.5 0 0 0 9.5 12a1.5 1.5 0 0 0 1.5-1.5A1.5 1.5 0 0 0 9.5 9m5 0a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5A1.5 1.5 0 0 0 14.5 9M12 4l.68.03c.94-.79 2.14-1.44 3.04-1.68c1.87-.5 5.16-.12 5.59 1.48c.31 1.17-.71 2.62-2.28 3.55A8.97 8.97 0 0 1 21 13a9 9 0 0 1-9 9a9 9 0 0 1-9-9c0-2.13.74-4.08 1.97-5.62C3.4 6.45 2.38 5 2.69 3.83c.43-1.6 3.72-1.98 5.59-1.48c.9.24 2.1.89 3.04 1.68zm-2 12a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-2-3c-2.76 0-5 2.34-5 4s2.24 3 5 3s5-1.34 5-3s-2.24-4-5-4M7.76 4.28c-.45-.12-3.17.07-3.17.07S6.8 6.1 7.24 6.22c.45.12 2.53.21 2.67-.32c.15-.54-1.71-1.5-2.15-1.62m8.48 0c-.44.12-2.3 1.08-2.15 1.62c.14.53 2.22.44 2.67.32c.44-.12 2.65-1.87 2.65-1.87s-2.72-.19-3.17-.07"></svg:path>`,
})
export class MdiPigIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPigVariantIcon],svg[mdi-pig-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.83 7.5l-2.27-2.27c.07-.42.18-.81.32-1.15A1.498 1.498 0 0 0 16.5 2c-1.64 0-3.09.79-4 2h-5C4.46 4 2 6.46 2 9.5S4.5 21 4.5 21H10v-2h2v2h5.5l1.68-5.59l2.82-.94V7.5zM16 11c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class MdiPigVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPigVariantOutlineIcon],svg[mdi-pig-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 10c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1m7-2.5v6.97l-2.82.94L17.5 21H12v-2h-2v2H4.5S2 12.54 2 9.5S4.46 4 7.5 4h5c.91-1.21 2.36-2 4-2a1.498 1.498 0 0 1 1.38 2.08c-.14.34-.26.73-.32 1.15l2.27 2.27zm-2 2h-1L15.5 6c0-.65.09-1.29.26-1.91c-.97.25-1.76.97-2.09 1.91H7.5C5.57 6 4 7.57 4 9.5c0 1.88 1.22 6.65 2 9.5h2v-2h6v2h2l1.56-5.15l2.44-.82z"></svg:path>`,
})
export class MdiPigVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPiggyBankIcon],svg[mdi-piggy-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.83 7.5l-2.27-2.27c.07-.42.18-.81.32-1.15A1.498 1.498 0 0 0 16.5 2c-1.64 0-3.09.79-4 2h-5C4.46 4 2 6.46 2 9.5S4.5 21 4.5 21H10v-2h2v2h5.5l1.68-5.59l2.82-.94V7.5zM13 9H8V7h5zm3 2c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class MdiPiggyBankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPiggyBankOutlineIcon],svg[mdi-piggy-bank-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 10c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1M8 9h5V7H8zm14-1.5v6.97l-2.82.94L17.5 21H12v-2h-2v2H4.5S2 12.54 2 9.5S4.46 4 7.5 4h5c.91-1.21 2.36-2 4-2a1.498 1.498 0 0 1 1.38 2.08c-.14.34-.26.73-.32 1.15l2.27 2.27zm-2 2h-1L15.5 6c0-.65.09-1.29.26-1.91c-.97.25-1.76.97-2.09 1.91H7.5C5.57 6 4 7.57 4 9.5c0 1.88 1.22 6.65 2 9.5h2v-2h6v2h2l1.56-5.15l2.44-.82z"></svg:path>`,
})
export class MdiPiggyBankOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPillIcon],svg[mdi-pill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.22 11.29l7.07-7.07a6.01 6.01 0 0 1 8.49 0c2.34 2.34 2.34 6.14 0 8.49l-7.07 7.07c-2.35 2.34-6.15 2.34-8.49 0a6.01 6.01 0 0 1 0-8.49m1.42 1.42a3.98 3.98 0 0 0-1.04 3.86l5.99-5.98l4.24 4.24l3.53-3.54a3.98 3.98 0 0 0 0-5.65a3.98 3.98 0 0 0-5.65 0z"></svg:path>`,
})
export class MdiPillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPillMultipleIcon],svg[mdi-pill-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.2 3.5c-1-1-2.3-1.5-3.5-1.5s-2.6.5-3.5 1.5L3.4 9.1c-2 2-2 5.1 0 7.1s5.1 2 7.1 0l5.7-5.7c1.9-1.9 1.9-5.1 0-7m-1.4 5.6L12 11.9L8.4 8.4L4 12.8c0-.8.2-1.7.9-2.3l5.7-5.7c.5-.5 1.3-.8 2-.8s1.5.3 2.1.8c1.2 1.3 1.2 3.1.1 4.3m4.8-2c0 .8-.2 1.5-.4 2.3c1 1.2 1 3-.1 4.1l-2.8 2.8l-1.5-1.5l-2.8 2.8c-1.3 1.3-3.1 2-4.8 2c.2.3.4.6.7.9c2 2 5.1 2 7.1 0l5.7-5.7c2-2 2-5.1 0-7.1c-.5-.2-.8-.4-1.1-.6"></svg:path>`,
})
export class MdiPillMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPillOffIcon],svg[mdi-pill-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l5.7 5.7l-2.59 2.59a6.01 6.01 0 0 0 0 8.49c2.34 2.34 6.14 2.34 8.49 0l2.59-2.59l5.54 5.54zM4.6 16.57a3.98 3.98 0 0 1 1.04-3.86l2.59-2.59l1.41 1.41zm6.18-8.99L9.36 6.16l1.93-1.94a6.01 6.01 0 0 1 8.49 0c2.34 2.34 2.34 6.14 0 8.49l-1.93 1.94l-1.42-1.42l1.93-1.94a3.98 3.98 0 0 0 0-5.65a3.98 3.98 0 0 0-5.65 0z"></svg:path>`,
})
export class MdiPillOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPillarIcon],svg[mdi-pillar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5h12a1 1 0 0 1 1 1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1a1 1 0 0 1 1-1m15-3v2H3V2zm-6 6h2v14h-2zM7 8h2v14H7zm4 0h2v14h-2z"></svg:path>`,
})
export class MdiPillarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPinIcon],svg[mdi-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2z"></svg:path>`,
})
export class MdiPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPinOffIcon],svg[mdi-pin-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.27L3.28 4L20 20.72L18.73 22l-5.93-5.93V22h-1.6v-6H6v-2l2-2v-.73zM16 12l2 2v2h-.18L8 6.18V4H7V2h10v2h-1z"></svg:path>`,
})
export class MdiPinOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPinOffOutlineIcon],svg[mdi-pin-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6.2V4H7V2h10v2h-1v8l2 2v2h-.2L14 12.2V4h-4v4.2zm12 14.5L18.7 22l-5.9-5.9V22h-1.6v-6H6v-2l2-2v-.7l-6-6L3.3 4zM8.8 14h1.8l-.9-.9z"></svg:path>`,
})
export class MdiPinOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPinOutlineIcon],svg[mdi-pin-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2zm-7.2 2l1.2-1.2V4h4v8.8l1.2 1.2z"></svg:path>`,
})
export class MdiPinOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPineTreeIcon],svg[mdi-pine-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 21v-3H3l5-5H5l5-5H7l5-5l5 5h-3l5 5h-3l5 5h-7v3z"></svg:path>`,
})
export class MdiPineTreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPineTreeBoxIcon],svg[mdi-pine-tree-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m7 17h2v-2h5l-4-4h3l-4-4h3l-4-4l-4 4h3l-4 4h3l-4 4h5z"></svg:path>`,
})
export class MdiPineTreeBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPineTreeFireIcon],svg[mdi-pine-tree-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.14 14.84l-.02.01c.23.28.43.59.58.92l.09.19c.71 1.69.21 3.64-1.1 4.86c-1.19 1.09-2.85 1.38-4.39 1.18c-1.46-.18-2.8-1.1-3.57-2.37c-.23-.39-.43-.83-.53-1.28c-.13-.35-.17-.73-.2-1.1c-.09-1.6.55-3.3 1.76-4.3c-.55 1.21-.42 2.72.39 3.77l.11.13c.14.12.31.15.47.09c.15-.06.27-.21.27-.37l-.07-.24c-.88-2.33-.14-5.03 1.73-6.56c.51-.42 1.14-.8 1.8-.97c-.68 1.36-.46 3.14.63 4.2c.46.5 1.02.79 1.49 1.23zm-2.28 4.66l-.01-.03c.45-.39.7-1.06.68-1.66l-.03-.31c-.2-1-1.07-1.34-1.63-2.07c-.17-.22-.32-.5-.43-.78c-.22.5-.24.97-.15 1.51c.1.57.32 1.06.21 1.65c-.16.65-.67 1.3-1.56 1.51c.5.49 1.31.88 2.12.6c.26-.07.59-.26.8-.42M9 21v-3H2l5-5H4l5-5H6l5-5l5 5h-3l1.82 1.82C12.55 11.06 11 13.59 11 16.5c0 1.69.5 3.25 1.4 4.5z"></svg:path>`,
})
export class MdiPineTreeFireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPineTreeVariantIcon],svg[mdi-pine-tree-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12L12 2L5 12h1.86L3 18h7v4h4v-4h7l-3.86-6z"></svg:path>`,
})
export class MdiPineTreeVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPineTreeVariantOutlineIcon],svg[mdi-pine-tree-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12L12 2L5 12h1.86L3 18h7v4h4v-4h7l-3.86-6zm-3.84-2H13.5l3.84 6H6.67l3.86-6H8.84L12 5.5z"></svg:path>`,
})
export class MdiPineTreeVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPinterestIcon],svg[mdi-pinterest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.04 21.54c.96.29 1.93.46 2.96.46a10 10 0 0 0 10-10A10 10 0 0 0 12 2A10 10 0 0 0 2 12c0 4.25 2.67 7.9 6.44 9.34c-.09-.78-.18-2.07 0-2.96l1.15-4.94s-.29-.58-.29-1.5c0-1.38.86-2.41 1.84-2.41c.86 0 1.26.63 1.26 1.44c0 .86-.57 2.09-.86 3.27c-.17.98.52 1.84 1.52 1.84c1.78 0 3.16-1.9 3.16-4.58c0-2.4-1.72-4.04-4.19-4.04c-2.82 0-4.48 2.1-4.48 4.31c0 .86.28 1.73.74 2.3c.09.06.09.14.06.29l-.29 1.09c0 .17-.11.23-.28.11c-1.28-.56-2.02-2.38-2.02-3.85c0-3.16 2.24-6.03 6.56-6.03c3.44 0 6.12 2.47 6.12 5.75c0 3.44-2.13 6.2-5.18 6.2c-.97 0-1.92-.52-2.26-1.13l-.67 2.37c-.23.86-.86 2.01-1.29 2.7z"></svg:path>`,
})
export class MdiPinterestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPinterestBoxIcon],svg[mdi-pinterest-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9.29c.4-.67.9-1.62 1.1-2.36l.66-2.3c.31.61 1.23 1.11 2.17 1.11c2.95 0 5-2.67 5-6c0-3.17-2.58-5.56-5.92-5.56c-4.16 0-6.33 2.78-6.33 5.83c0 1.42.72 3.17 1.94 3.73c.17.11.28.05.28-.11l.28-1.06c.03-.14.03-.22-.06-.28c-.44-.55-.72-1.39-.72-2.22c0-2.14 1.61-4.17 4.34-4.17c2.39 0 4.05 1.58 4.05 3.89c0 2.61-1.33 4.45-3.05 4.45c-.98 0-1.64-.84-1.48-1.78c.28-1.14.84-2.34.84-3.17c0-.78-.39-1.39-1.23-1.39c-.94 0-1.77 1-1.77 2.34c0 .88.27 1.44.27 1.44l-1.11 4.78c-.16.83-.08 2.08 0 2.83H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" fill="currentColor"></svg:path>`,
})
export class MdiPinterestBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPinwheelIcon],svg[mdi-pinwheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12c0-3 2.5-5.5 5.5-5.5S23 9 23 12zm0 0c0 3-2.5 5.5-5.5 5.5S1 15 1 12zm0 0c-3 0-5.5-2.5-5.5-5.5S9 1 12 1zm0 0c3 0 5.5 2.5 5.5 5.5S15 23 12 23z"></svg:path>`,
})
export class MdiPinwheelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPinwheelOutlineIcon],svg[mdi-pinwheel-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23h-1v-6.57C9.93 17.4 8.5 18 7 18c-3.25 0-6-2.75-6-6v-1h6.57C6.6 9.93 6 8.5 6 7c0-3.25 2.75-6 6-6h1v6.57C14.07 6.6 15.5 6 17 6c3.25 0 6 2.75 6 6v1h-6.57c.97 1.07 1.57 2.5 1.57 4c0 3.25-2.75 6-6 6m1-9.87v7.74c1.7-.46 3-2.04 3-3.87s-1.3-3.41-3-3.87M3.13 13c.46 1.7 2.04 3 3.87 3s3.41-1.3 3.87-3zm10-2h7.74c-.46-1.7-2.05-3-3.87-3s-3.41 1.3-3.87 3M11 3.13C9.3 3.59 8 5.18 8 7s1.3 3.41 3 3.87z"></svg:path>`,
})
export class MdiPinwheelOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPipeIcon],svg[mdi-pipe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14h-2v2h-6v-3h2v-2h-2V6a2 2 0 0 0-2-2H4V2H2v8h2V8h6v3H8v2h2v5a2 2 0 0 0 2 2h8v2h2"></svg:path>`,
})
export class MdiPipeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPipeDisconnectedIcon],svg[mdi-pipe-disconnected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9v2H8V9h2V8H4v2H2V2h2v2h8a2 2 0 0 1 2 2v3zm-6 6v3a2 2 0 0 0 2 2h8v2h2v-8h-2v2h-6v-1h2v-2H8v2z"></svg:path>`,
})
export class MdiPipeDisconnectedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPipeLeakIcon],svg[mdi-pipe-leak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5v8h2v-2h6l2-2l-2-2H4V5zm18 0v2h-8l2 2l-2 2h8v2h2V5zm-8 8s-2 2.17-2 3.5a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-1.33-2-3.5-2-3.5"></svg:path>`,
})
export class MdiPipeLeakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPipeValveIcon],svg[mdi-pipe-valve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v8h-2v-2h-3.42c-.77 1.76-2.53 3-4.58 3s-3.81-1.24-4.58-3H4v2H2v-8h2v2h3.43c.5-1.15 1.42-2.07 2.57-2.58V11H8V9h8v2h-2v1.42c1.15.51 2.07 1.43 2.57 2.58H20v-2zM17 2H7c-.55 0-1 .45-1 1s.45 1 1 1h3v1h1v3h2V5h1V4h3c.55 0 1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class MdiPipeValveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPipeWrenchIcon],svg[mdi-pipe-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.17 5.63l-2.11 2.15l-2.15-2.15l4.26-4.22l3.52 3.51c1.17 1.17 1.17 3.08 0 4.27zM4.83 12.7L7 14.81l3.5-3.51l-2.11-2.11zm10.64-4.92L19 11.3l-1.42 1.4l-.7-.7L6.23 22.59l-2.81-2.81l8.49-8.48l-4.22-4.27L9.8 4.92l4.26 4.27z"></svg:path>`,
})
export class MdiPipeWrenchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPirateIcon],svg[mdi-pirate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.2 12.1c-.3.2-.5.6-.4.9c0 .7.7 1.2 1.3 1.2s1.2-.5 1.2-1.2q-.9-.6-2.1-.9M22 11l1-4s-2 0-5-2s-3-4-6-4s-3 2-6 4s-5 2-5 2l1 4h.1c-.1.3-.1.7-.1 1c0 3.5 1.8 6.6 4.5 8.4l-.5.9c6.4 4.1 12 0 12 0l-.5-.9c2.7-1.8 4.5-4.9 4.5-8.4zM11.3 4.5L9.9 3.1l.7-.7L12 3.8l1.4-1.4l.7.7l-1.4 1.4l1.4 1.4l-.7.7L12 5.2l-1.4 1.4l-.7-.7zm-2 4c1-.3 2-.5 2.7-.5c2.2 0 5.9 1.6 7.8 2.4c.1.3.1.6.1.9zm4.3 10.6c-.7.4-1.4.7-2.2.8c-.5-.4-.5-1.2 0-1.6c.4-.4 1.3-.6 1.8-.1c.3.1.4.6.4.9m6.4-5.7c-.5 2.1-1.8 4-3.5 5.2L15 16H9l-1.5 2.6C5.4 17.2 4 14.8 4 12c0-.5.1-1 .2-1.5c.5-.2 1.1-.5 1.8-.8l7.1 1.9V14c0 .5.4 1 1 1h2c.5 0 1-.4 1-1v-1.4z"></svg:path>`,
})
export class MdiPirateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPistolIcon],svg[mdi-pistol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5h16v4h-1v1h-6a1 1 0 0 0-1 1v1a2 2 0 0 1-2 2H9.62c-.38 0-.73.22-.9.56l-2.45 4.89c-.17.34-.51.55-.89.55H2s-3 0 1-6c0 0 3-4-1-4V5h1l.5-1h3zm7 7v-1a1 1 0 0 0-1-1h-1s-1 1 0 2a2 2 0 0 1-2-2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1"></svg:path>`,
})
export class MdiPistolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPistonIcon],svg[mdi-piston-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 16.18c.5.17.9.45 1.23.82H15v4h-.79c-.32.35-.71.63-1.21.8c-1.15.42-2.42.07-3.22-.8H9v-4h.77c.33-.37.73-.65 1.23-.82V12h2zM12 20a1 1 0 0 0 1-1a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1m5-16h-2v1h2v6H7V5h2V4H7V2h10zm-5 5a1 1 0 0 0 1-1a1 1 0 0 0-1-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1"></svg:path>`,
})
export class MdiPistonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPitchforkIcon],svg[mdi-pitchfork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.9.9l-2.8 2.8c-.8.8-.8 2 0 2.8L14.5 8l-5.3 5.4L7.8 12c-.8-.8-2-.8-2.8 0l-4 4l1.4 1.4l4-4l1.4 1.4l-4 4l1.4 1.4l4-4l1.4 1.4l-.7.8l-3.2 3.2L8 23l4-4c.8-.8.8-2 0-2.8l-1.4-1.4l5.3-5.4l1.4 1.4c.8.8 2 .8 2.8 0L23 8zm2.8 8.5l-4.2-4.2l1.4-1.4L20.1 8z"></svg:path>`,
})
export class MdiPitchforkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPizzaIcon],svg[mdi-pizza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2M7 7c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m5-5C8.43 2 5.23 3.54 3 6l9 16l9-16c-2.22-2.46-5.43-4-9-4"></svg:path>`,
})
export class MdiPizzaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlaneCarIcon],svg[mdi-plane-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.57 12.66c-.14-.4-.52-.66-.97-.66h-7.19c-.46 0-.83.26-.98.66L11 16.77v5.51c0 .38.32.72.7.72h.62c.38 0 .68-.38.68-.76V21h8v1.24c0 .38.31.76.69.76h.61c.38 0 .7-.34.7-.72v-5.51zm-8.16.34h7.19l1.03 3h-9.25zM13 19c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m8 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1M6.66 14.53L7 17l-1.05 1.06l-1.76-3.18L1 13.11l1.06-1.08l2.5.37l3.87-3.87L1 4.62l1.42-1.41l9.19 2.12l3.89-3.89c.56-.585 1.56-.585 2.12 0c.59.59.59 1.56 0 2.12l-3.89 3.89l.82 3.55h-1.14c-.87 0-1.62.5-1.91 1.31l-.03.06l-.91-1.74z"></svg:path>`,
})
export class MdiPlaneCarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlaneTrainIcon],svg[mdi-plane-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8h-6c-1.66 0-3 1.34-3 3v7c0 1.66 1.34 3 3 3l-1 1v1h1l2-2.03h2L20 23h1v-1l-1-1c1.66 0 3-1.34 3-3v-7c0-1.66-1.34-3-3-3m-6 11c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m6 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m1-3h-8v-6h8zM6.66 14.53L7 17l-1.05 1.06l-1.76-3.18L1 13.11l1.06-1.08l2.5.37l3.87-3.87L1 4.62l1.42-1.41l9.19 2.12l3.89-3.89c.56-.585 1.56-.585 2.12 0c.59.59.59 1.56 0 2.12L14.18 7H14c-2.21 0-4 1.79-4 4v.19z"></svg:path>`,
})
export class MdiPlaneTrainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlayIcon],svg[mdi-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5.14v14l11-7z"></svg:path>`,
})
export class MdiPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlayBoxIcon],svg[mdi-play-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.11 0-2 .89-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2m-9 13V8l5 4"></svg:path>`,
})
export class MdiPlayBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlayBoxEditOutlineIcon],svg[mdi-play-box-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 18.9l6.1-6.1l2.1 2.1l-6.1 6.1H13zm8.4-7.6l1.3 1.3c.2.2.2.5 0 .7l-1 1l-2.1-2l1-1c.1-.1.2-.2.4-.2s.3 0 .4.2M11 21H5c-.5 0-1-.2-1.4-.6S3 19.5 3 19V5c0-.5.2-1 .6-1.4S4.5 3 5 3h14c1.1 0 2 .9 2 2v4h-2V5H5v14h6zm4-9l-5-4v8z"></svg:path>`,
})
export class MdiPlayBoxEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlayBoxLockIcon],svg[mdi-play-box-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 17.3v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-1.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5V16c.6 0 1.2.6 1.2 1.3M13 19v2H4a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h14a2 2 0 0 1 2 2v5.1l-1-.1l-1 .1a5.02 5.02 0 0 0-4 4.66c-.61.55-1 1.35-1 2.24zm7.5-4.5c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V16h3zM9 8v8l5-4z"></svg:path>`,
})
export class MdiPlayBoxLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlayBoxLockOpenIcon],svg[mdi-play-box-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 17.3v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-2.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5v.5h-1.3v-.5c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V16h4.3c.6 0 1.2.6 1.2 1.3M9 8v8l5-4zm4 11v2H4a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h14a2 2 0 0 1 2 2v4.1L19 9c-2.76 0-5 2.24-5 5v.76c-.61.55-1 1.35-1 2.24z"></svg:path>`,
})
export class MdiPlayBoxLockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlayBoxLockOpenOutlineIcon],svg[mdi-play-box-lock-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 17.3v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-2.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5v.5h-1.3v-.5c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V16h4.3c.6 0 1.2.6 1.2 1.3M18 5H4v14h9v2H4a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h14a2 2 0 0 1 2 2v4.1L19 9l-1 .1zM9 8l5 4l-5 4z"></svg:path>`,
})
export class MdiPlayBoxLockOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlayBoxLockOutlineIcon],svg[mdi-play-box-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 17.3v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-1.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5V16c.6 0 1.2.6 1.2 1.3m-2.5-2.8c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V16h3zM18 5H4v14h9v2H4a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h14a2 2 0 0 1 2 2v5.1l-1-.1l-1 .1zM9 8l5 4l-5 4z"></svg:path>`,
})
export class MdiPlayBoxLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlayBoxMultipleIcon],svg[mdi-play-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6H2v14a2 2 0 0 0 2 2h14v-2H4zm16-4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-8 12.5v-9l6 4.5z"></svg:path>`,
})
export class MdiPlayBoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlayBoxMultipleOutlineIcon],svg[mdi-play-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm16-2v12H8V4zm0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-8 12.5v-9l6 4.5z"></svg:path>`,
})
export class MdiPlayBoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlayBoxOutlineIcon],svg[mdi-play-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 5v8l5-4z"></svg:path>`,
})
export class MdiPlayBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlayCircleIcon],svg[mdi-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 16.5v-9l6 4.5M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></svg:path>`,
})
export class MdiPlayCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlayCircleOutlineIcon],svg[mdi-play-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-2 14.5l6-4.5l-6-4.5z"></svg:path>`,
})
export class MdiPlayCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlayNetworkIcon],svg[mdi-play-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20a1 1 0 0 0-1-1h-1v-2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4v2h-1a1 1 0 0 0-1 1H2v2h7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h7v-2zm-5-6V6l5 4z"></svg:path>`,
})
export class MdiPlayNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlayNetworkOutlineIcon],svg[mdi-play-network-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20a1 1 0 0 0-1-1h-1v-2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4v2h-1a1 1 0 0 0-1 1H2v2h7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h7v-2zm-8-5V5h10v10zm3-1V6l5 4z"></svg:path>`,
})
export class MdiPlayNetworkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlayOutlineIcon],svg[mdi-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 8.64L13.77 12L8.5 15.36zM6.5 5v14l11-7"></svg:path>`,
})
export class MdiPlayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlayPauseIcon],svg[mdi-play-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5v14l8-7m2 7h3V5h-3m5 0v14h3V5"></svg:path>`,
})
export class MdiPlayPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlayProtectedContentIcon],svg[mdi-play-protected-content-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5v13h9v-2H4V7h13v4h2V5zm7 4v5l3.5-2.5zm12.04 2.67l-4.95 4.95l-2.13-2.12l-1.41 1.41l3.54 3.54l6.36-6.36z"></svg:path>`,
})
export class MdiPlayProtectedContentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlaySpeedIcon],svg[mdi-play-speed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2.05v2c4.39.54 7.5 4.53 6.96 8.92c-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93c-.45-4.75-4.22-8.5-8.95-8.97zM5.67 19.74A10 10 0 0 0 11 22v-2a8 8 0 0 1-3.9-1.63zm1.43-14c1.12-.9 2.47-1.48 3.9-1.68v-2c-1.95.19-3.81.94-5.33 2.2zM5.69 7.1L4.26 5.67A9.9 9.9 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9M4.06 13h-2c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8 8 0 0 1 4.06 13M10 16.5l6-4.5l-6-4.5z"></svg:path>`,
})
export class MdiPlaySpeedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlaylistCheckIcon],svg[mdi-playlist-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10H3v2h11zm0-4H3v2h11zM3 16h7v-2H3zm18.5-4.5L23 13l-7 7l-4.5-4.5L13 14l3 3z"></svg:path>`,
})
export class MdiPlaylistCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlaylistEditIcon],svg[mdi-playlist-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6v2h11V6zm0 4v2h11v-2zm17 .1c-.1 0-.3.1-.4.2l-1 1l2.1 2.1l1-1c.2-.2.2-.6 0-.8l-1.3-1.3c-.1-.1-.2-.2-.4-.2m-1.9 1.8l-6.1 6V20h2.1l6.1-6.1zM3 14v2h7v-2z"></svg:path>`,
})
export class MdiPlaylistEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlaylistMinusIcon],svg[mdi-playlist-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16h7v-2H3m9 0v2h10v-2m-8-8H3v2h11m0 2H3v2h11z"></svg:path>`,
})
export class MdiPlaylistMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlaylistMusicIcon],svg[mdi-playlist-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 6H3v2h12zm0 4H3v2h12zM3 16h8v-2H3zM17 6v8.18c-.31-.11-.65-.18-1-.18a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3V8h3V6z"></svg:path>`,
})
export class MdiPlaylistMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlaylistMusicOutlineIcon],svg[mdi-playlist-music-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 6v2H3V6zm0 4v2H3v-2zM3 16v-2h8v2zM17 6h5v2h-3v9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3c.35 0 .69.07 1 .18zm-1 10a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiPlaylistMusicOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlaylistPlayIcon],svg[mdi-playlist-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm13-1v8l6-4z"></svg:path>`,
})
export class MdiPlaylistPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlaylistPlusIcon],svg[mdi-playlist-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16h7v-2H3m15 0v-4h-2v4h-4v2h4v4h2v-4h4v-2m-8-8H3v2h11m0 2H3v2h11z"></svg:path>`,
})
export class MdiPlaylistPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlaylistRemoveIcon],svg[mdi-playlist-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10H3v2h11zm0-4H3v2h11zM3 16h7v-2H3zm11.4 6l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6l2.6-2.6l-1.4-1.4l-2.6 2.6l-2.6-2.6l-1.4 1.4l2.6 2.6l-2.6 2.6z"></svg:path>`,
})
export class MdiPlaylistRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlaylistStarIcon],svg[mdi-playlist-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 19.1l2.5 1.5l-.7-2.8l2.2-1.9l-2.9-.2L17 13l-1.1 2.6l-2.9.3l2.2 1.9l-.7 2.8zM3 14h8v2H3zm0-8h12v2H3zm0 4h12v2H3z"></svg:path>`,
})
export class MdiPlaylistStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlexIcon],svg[mdi-plex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm4.56 4h3.5l3.44 6l-3.44 6h-3.5L12 12z"></svg:path>`,
})
export class MdiPlexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPliersIcon],svg[mdi-pliers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.4 12.2s2.3 3.1 4.4 5.2c.9.9 1.8 1.5 2.5 2c.8.5 1 1.6.3 2.3c-.4.4-1.1.6-1.6.3c-.8-.4-2-1.2-3.3-2.4c-2.1-2.1-4.4-5.2-4.4-5.2zm2.8-2.8s3.1 2.3 5.2 4.4c.9.9 1.5 1.8 2 2.5c.5.8 1.6 1 2.3.3c.4-.4.6-1.1.3-1.6c-.4-.8-1.2-2-2.4-3.3c-2.1-2.1-5.2-4.4-5.2-4.4zm-1.8-3.9L7.6 2.7L4.1 2l-.5.5l2.3 2.3c.5-.1 1 0 1.4.4c.6.6.6 1.5 0 2.1s-1.5.6-2.1 0c-.4-.4-.5-1-.4-1.5L2.5 3.6l-.5.5l.7 3.5l2.8 2.8l1.4 2.8l1.9-1.9l-1-1.8l1.6-1.6l1.9.9l1.9-1.9z"></svg:path>`,
})
export class MdiPliersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlusIcon],svg[mdi-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"></svg:path>`,
})
export class MdiPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlusBoxIcon],svg[mdi-plus-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m2-8H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiPlusBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlusBoxMultipleIcon],svg[mdi-plus-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11h-4v4h-2v-4H9V9h4V5h2v4h4m1-7H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M4 6H2v14a2 2 0 0 0 2 2h14v-2H4z"></svg:path>`,
})
export class MdiPlusBoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlusBoxMultipleOutlineIcon],svg[mdi-plus-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 11h-3v3h-2v-3h-3V9h3V6h2v3h3m2-5v12H8V4zm0-2H8c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h12c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2M4 6H2v14a2 2 0 0 0 2 2h14v-2H4z"></svg:path>`,
})
export class MdiPlusBoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlusBoxOutlineIcon],svg[mdi-plus-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19V5H5v14zm0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-8 4h2v4h4v2h-4v4h-2v-4H7v-2h4z"></svg:path>`,
})
export class MdiPlusBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlusCircleIcon],svg[mdi-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m-5-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></svg:path>`,
})
export class MdiPlusCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlusCircleMultipleIcon],svg[mdi-plus-circle-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-2.8 1.6-5.2 4-6.3V3.5C2.5 4.8 0 8.1 0 12s2.5 7.2 6 8.5v-2.2c-2.4-1.1-4-3.5-4-6.3m13-9c-5 0-9 4-9 9s4 9 9 9s9-4 9-9s-4-9-9-9m5 10h-4v4h-2v-4h-4v-2h4V7h2v4h4z"></svg:path>`,
})
export class MdiPlusCircleMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlusCircleMultipleOutlineIcon],svg[mdi-plus-circle-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3M2 12c0-2.79 1.64-5.2 4-6.32V3.5C2.5 4.76 0 8.09 0 12s2.5 7.24 6 8.5v-2.18C3.64 17.2 2 14.79 2 12m13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9s9-4.04 9-9s-4.04-9-9-9m0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7"></svg:path>`,
})
export class MdiPlusCircleMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlusCircleOutlineIcon],svg[mdi-plus-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m1 5h-2v4H7v2h4v4h2v-4h4v-2h-4z"></svg:path>`,
})
export class MdiPlusCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlusLockIcon],svg[mdi-plus-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.14 17.67v-.45C21.14 16 20.2 15 19 15s-2.14 1-2.14 2.22v.45c-.52 0-.86.33-.86.89v3.55c0 .54.34.89.86.89h4.28c.52 0 .86-.35.86-.89v-3.56c0-.55-.34-.88-.86-.88m-.85 0h-2.57v-.45c0-.72.59-1.33 1.28-1.33s1.29.61 1.29 1.33zM11 5v6H5v2h6v6h2v-6h6v-2h-6V5z"></svg:path>`,
})
export class MdiPlusLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlusLockOpenIcon],svg[mdi-plus-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5v6H5v2h6v6h2v-6h6v-2h-6V5zm8 10c-1.05 0-2.1.8-2.1 1.82v1.82c-.45 0-.9.43-.9.86v2.55c0 .51.45.95.9.95h4.13c.52 0 .97-.44.97-.87v-2.55c0-.51-.45-.94-.9-.94h-3.22v-1.82c0-.58.52-.95 1.12-.95s1.13.37 1.13.95v.36h.97v-.36C21.1 15.8 20.05 15 19 15"></svg:path>`,
})
export class MdiPlusLockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlusMinusIcon],svg[mdi-plus-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4v5H6v2h5v5h2v-5h5V9h-5V4zM6 18v2h12v-2z"></svg:path>`,
})
export class MdiPlusMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlusMinusBoxIcon],svg[mdi-plus-minus-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm6 3h2v3h3v2h-3v3h-2v-3H8V9h3zM8 16h8v2H8z"></svg:path>`,
})
export class MdiPlusMinusBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlusMinusVariantIcon],svg[mdi-plus-minus-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h3V4h2v3h3v2H8v3H6V9H3zm10 8h8v2h-8zm3.04-12h2.31L7.96 21H5.65z"></svg:path>`,
})
export class MdiPlusMinusVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlusNetworkIcon],svg[mdi-plus-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11V9h-3V6h-2v3H8v2h3v3h2v-3zm1-8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v2h1a1 1 0 0 1 1 1h7v2h-7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1H2v-2h7a1 1 0 0 1 1-1h1v-2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></svg:path>`,
})
export class MdiPlusNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlusNetworkOutlineIcon],svg[mdi-plus-network-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20a1 1 0 0 0-1-1h-1v-2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4v2h-1a1 1 0 0 0-1 1H2v2h7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h7v-2zm-8-5V5h10v10zm8-4h-2v2h-2v-2H9V9h2V7h2v2h2z"></svg:path>`,
})
export class MdiPlusNetworkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlusOutlineIcon],svg[mdi-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9h5V4h6v5h5v6h-5v5H9v-5H4zm7 4v5h2v-5h5v-2h-5V6h-2v5H6v2z"></svg:path>`,
})
export class MdiPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPlusThickIcon],svg[mdi-plus-thick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14h-6v6h-4v-6H4v-4h6V4h4v6h6z"></svg:path>`,
})
export class MdiPlusThickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPocketIcon],svg[mdi-pocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16v14.63l-8 4.62l-8-4.62zm14 6H6v7.5l6 3.44l6-3.44zm0-4H6v2h12z"></svg:path>`,
})
export class MdiPocketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPodcastIcon],svg[mdi-podcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 18.25v3.25H7v-3.25c0-1.38 2.24-2.5 5-2.5s5 1.12 5 2.5M12 5.5a6.5 6.5 0 0 1 6.5 6.5c0 1.25-.35 2.42-.96 3.41L16 14.04c.32-.61.5-1.31.5-2.04c0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5c0 .73.18 1.43.5 2.04l-1.54 1.37c-.61-.99-.96-2.16-.96-3.41A6.5 6.5 0 0 1 12 5.5m0-4A10.5 10.5 0 0 1 22.5 12c0 2.28-.73 4.39-1.96 6.11l-1.5-1.35c.92-1.36 1.46-3 1.46-4.76A8.5 8.5 0 0 0 12 3.5A8.5 8.5 0 0 0 3.5 12c0 1.76.54 3.4 1.46 4.76l-1.5 1.35A10.47 10.47 0 0 1 1.5 12A10.5 10.5 0 0 1 12 1.5m0 8a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 12A2.5 2.5 0 0 1 12 9.5"></svg:path>`,
})
export class MdiPodcastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPodiumIcon],svg[mdi-podium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 7.09l2.45 1.49l-.65-2.81L16 3.89l-2.89-.25L12 1l-1.13 2.64L8 3.89l2.18 1.88l-.68 2.81zm-8 6l2.45 1.49l-.65-2.81L8 9.89l-2.89-.25L4 7L2.87 9.64L0 9.89l2.18 1.88l-.68 2.81zm16-3l2.45 1.49l-.65-2.81L24 6.89l-2.89-.25L20 4l-1.13 2.64l-2.87.25l2.18 1.88l-.68 2.81zM15 23H9V10h6zm-8 0H1v-6h6zm16 0h-6V13h6z"></svg:path>`,
})
export class MdiPodiumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiPodiumBronzeIcon],svg[mdi-podium-bronze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 13.09l2.45 1.49l-.65-2.81L8 9.89l-2.89-.25L4 7L2.87 9.64L0 9.89l2.18 1.88l-.68 2.81zM7 23H1v-6h6zm2-13v13h6V10zm4 11h-2v-9h2zm4-8v10h6V13zm4 8h-2v-6h2z"></svg:path>`,
})
export class MdiPodiumBronzeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
